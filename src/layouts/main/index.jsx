import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash/isEqual';
import cx from 'classnames';

import routes from '@/routes';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';
import { selectLayout, setDisplayLayout, selectCollapse } from '@/store/slices/layoutSlice';

import Header from '@/layouts/header';

const Main = () => {
  const layout = useShallowEqualSelector(selectLayout);
  const collapse = useSelector(selectCollapse);
  const dispatch = useDispatch();

  const collapseClass = collapse ? 'ml-[80px]' : 'ml-[20%]';

  /**
   * check if layout of a route object is different from layout of rootStore, if so, dispatch an action to update layout
   * @param {{ header: boolean, footer: boolean }} routeLayout
   * @param {{ header: boolean, footer: boolean }} rootLayout
   */
  const updateDisplayLayout = (routeLayout, rootLayout) => {
    const newLayout = routeLayout
      ? { header: routeLayout.header, footer: routeLayout.footer }
      : { header: true, footer: true };

    if (!isEqual(newLayout, rootLayout)) {
      setTimeout(() => dispatch(setDisplayLayout(newLayout)));
    }
  };

  return (
    <>
      <div className={cx(collapseClass, 'flex flex-col w-full transition-[margin-left] delay-150')}>
        <Header />
        <Switch>
          {routes.map(
            ({
              page: Page,
              path,
              redirect,
              layout: routeLayout,
              ...rest
            }, idx) => {
              return redirect
                ? (
                  <Redirect key={idx} path={path} to={redirect} exact={true} />
                )
                : (
                  <Route
                    key={path}
                    path={path}
                    render={props => {
                      updateDisplayLayout(routeLayout, layout);
                      return <Page {...props} />;
                    }}
                    {...rest}
                  />
                );
            },
          )}
        </Switch>
      </div>
    </>
  );
};

export default Main;
