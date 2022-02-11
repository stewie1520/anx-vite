import PropTypes from 'prop-types';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import { useHiddenAfterSidebarTransitionEnd } from '@/hooks';
import { useNavlinkSidebarCollapseContext } from './navlink-sidebar-collapse';

export const NavLinkSidebar = ({ icon: Icon, title, to }) => {
  const collapseContext = useNavlinkSidebarCollapseContext();
  const isHidden = useHiddenAfterSidebarTransitionEnd();

  const navLinkCollapseClass = isHidden ? 'justify-center' : null;
  const hiddenClass = isHidden ? 'hidden' : null;
  const hiddenWidth = isHidden ? 'w-full' : 'w-[250px]';
  const underCollapsedTextClass = collapseContext ? 'text-sm' : null;
  const underCollapsedIconClass = collapseContext ? 'w-5 h-5' : null;

  return (
    <NavLink to={to} className="text-gray-400" activeClassName="bg-gray-100 text-blue-400 dark:bg-slate-800">
      <div className={cx(navLinkCollapseClass, underCollapsedTextClass, hiddenWidth, 'flex items-center space-x-4 p-3 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700')}>
        <Icon className={cx('w-6 h-6', underCollapsedIconClass)} />
        <span className={cx('font-medium', hiddenClass)}>{title}</span>
      </div>
    </NavLink>
  );
};

NavLinkSidebar.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  to: PropTypes.string,
};
