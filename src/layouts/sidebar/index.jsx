import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import {
  ChartPieIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArchiveIcon,
} from '@heroicons/react/outline';

import { selectCollapse, toggleCollapse } from '@/store/slices/layoutSlice';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const collapse = useSelector(selectCollapse);
  const collapseClass = collapse ? 'w-20' : 'w-1/5';
  const hiddenClass = collapse ? 'hidden' : null;

  return (
    <div className={cx(collapseClass, 'flex fixed justify-between z-50 h-full flex-col bg-white border-r-[1px] border-r-gray-200')}>
      <div className="flex flex-col space-y-5 p-3">
        <NavLink to="/overview" className="text-gray-400" activeClassName="bg-gray-100 text-blue-400">
          <div className="flex items-center space-x-4 p-3 rounded cursor-pointer hover:bg-gray-100">
            <ChartPieIcon className="w-6 h-6" />
            <span className={cx('font-medium', hiddenClass)}>Dashboard</span>
          </div>
        </NavLink>
        <NavLink to="/" exact className="text-gray-400" activeClassName="bg-gray-100 text-blue-400">
          <div className="flex items-center none space-x-4 p-3 rounded cursor-pointer hover:bg-gray-100">
            <ArchiveIcon className="w-6 h-6" />
            <span className={cx('font-medium', hiddenClass)}>Products</span>
          </div>
        </NavLink>
      </div>
      <div className="flex p-3">
        <button onClick={() => dispatch(toggleCollapse())} className="w-full rounded-sm hover:bg-blue-300 h-12 flex justify-center items-center bg-blue-200 text-white text-sm">
          {collapse ? (
            <ArrowRightIcon className="w-5 h-5" />
          ) : (
            <ArrowLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
