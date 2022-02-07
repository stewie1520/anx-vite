import { UserGroupIcon } from '@heroicons/react/solid';

export const WidgetTotalUsers = () => {
  return (
    <div className="relative bg-white text-gray-500 h-[240px] p-5">
      <div className="flex justify-between">
        <div className="h-[60px] w-[60px] bg-gray-100 p-3">
          <UserGroupIcon className="text-blue-400" />
        </div>
        <div className="text-white ">
        </div>
      </div>
      <div className="flex flex-col my-4">
        <p>Total Users</p>
        <h1 className="font-semibold text-3xl text-dark-blue">8,245</h1>
      </div>
      <div className="absolute bottom-0 h-[54px] w-full -ml-5 px-5">
        <div className="flex items-center border-t-[1px] h-full border-t-gray-300 w- mx-auto">
          <p className="text-sm">New user noted every week</p>
        </div>
      </div>
    </div>
  );
};
