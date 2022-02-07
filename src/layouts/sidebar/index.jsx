import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

// icons
import {
  ChartPieIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArchiveIcon,
} from '@heroicons/react/outline';
// components
import { NavLinkSidebar } from '@/components/navlinks';

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
    <div className={cx(layoutCollapseClass, 'transition-all delay-150 flex fixed justify-between z-50 h-full flex-col bg-white border-r-[1px] border-r-gray-200')}>
      <div className="flex flex-col space-y-5 p-3 overflow-hidden">
        <NavLinkSidebar icon={ChartPieIcon} title="Dashboard" to="/overview" />
        <NavLinkSidebar icon={ArchiveIcon} title="Products" to="/products" />
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
