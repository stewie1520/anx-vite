import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';

import { selectCollapse } from '@/store/slices/layoutSlice';

export const NavLinkSidebar = ({ icon: Icon, title, to }) => {
  const collapse = useSelector(selectCollapse);
  const navLinkCollapseClass = collapse ? 'justify-center' : null;
  const hiddenClass = collapse ? 'hidden' : null;

  return (
    <NavLink to={to} className="text-gray-400" activeClassName="bg-gray-100 text-blue-400">
      <div className={cx(navLinkCollapseClass, 'flex items-center space-x-4 p-3 rounded cursor-pointer hover:bg-gray-100')}>
        <Icon className="w-6 h-6" />
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
