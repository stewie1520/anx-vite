import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import isEqual from 'lodash/isEqual';

import routes from '@/routes';
import { useShallowEqualSelector } from '@/hooks/useShallowEqualSelector';
import { selectLayout, setDisplayLayout } from '@/store/slices/layoutSlice';

import Header from '@/layouts/header';

const Main = () => {
  const layout = useShallowEqualSelector(selectLayout);
  const dispatch = useDispatch();

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
      <div className="flex flex-col ml-[20%]">
        <Header />
        <Switch>
          {routes.map(
            ({
              page: Page,
              path,
              redirect,
              layout: routeLayout,
              ...rest
            }) => {
              return redirect
                ? (
                  <Redirect path={path} to={redirect} exact={true} />
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
