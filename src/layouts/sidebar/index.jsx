import { HomeIcon } from '@heroicons/react/solid';

const Sidebar = () => {
  return (
    <div className="flex fixed top-0 left-0 z-50 w-1/5 h-full flex-col bg-white border-r-[1px] border-r-gray-200">
      <div className="flex">
        <HomeIcon /> Dashboard
      </div>
    </div>
  );
};

export default Sidebar;
