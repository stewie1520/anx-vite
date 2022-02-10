import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import { Scrollbars } from 'react-custom-scrollbars';

// icons
import {
  ChartPieIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArchiveIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
// components
import { NavLinkSidebar, NavLinkSidebarCollapse } from '@/components/navlinks';

import { selectCollapse, selectLayout, toggleCollapse } from '@/store/slices/layoutSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebar } = useSelector(selectLayout);

  const collapse = useSelector(selectCollapse);
  const layoutCollapseClass = collapse ? 'w-20' : 'w-1/5';

  if (!sidebar) {
    return null;
  }

  return (
    <div className={cx(layoutCollapseClass, 'transition-[width] delay-150 flex fixed justify-between z-50 h-full flex-col bg-white border-r-[1px] border-r-gray-200 dark:bg-slate-900 dark:border-r-slate-800')}>
      <Scrollbars
        autoHide
      >
        <div className="flex flex-col space-y-5 divide-y divide-gray-100 p-3 overflow-auto dark:divide-slate-700">
          <NavLinkSidebar icon={ChartPieIcon} title="Dashboard" to="/overview" />
          <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
          <NavLinkSidebarCollapse icon={ShoppingCartIcon} title="Sale Managements">
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
          </NavLinkSidebarCollapse>
          <NavLinkSidebarCollapse icon={ShoppingCartIcon} title="Sale Managements">
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
          </NavLinkSidebarCollapse>
          <NavLinkSidebarCollapse icon={ShoppingCartIcon} title="Sale Managements">
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
          </NavLinkSidebarCollapse>
          <NavLinkSidebarCollapse icon={ShoppingCartIcon} title="Sale Managements">
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
            <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
          </NavLinkSidebarCollapse>
        </div>
      </Scrollbars>
      <div className="flex p-3">
        <button onClick={() => dispatch(toggleCollapse())} className="w-full rounded-sm hover:bg-blue-300 h-12 flex justify-center items-center bg-blue-200 text-white text-sm dark:bg-blue-500 dark:hover:bg-blue-400">
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
