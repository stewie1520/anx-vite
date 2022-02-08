import { EyeIcon } from '@heroicons/react/solid';

export const WidgetTotalViews = () => {
  return (
    <div className="relative bg-blue-400 text-white ring-1 ring-slate-900/5 h-[240px] p-5">
      <div className="flex justify-between">
        <div className="h-[60px] w-[60px] bg-blue-300 p-3">
          <EyeIcon />
        </div>
        <div className="text-white ">
        </div>
      </div>
      <div className="flex flex-col my-4">
        <p>Total Views</p>
        <h1 className="font-semibold text-3xl">308,402</h1>
      </div>
      <div className="absolute bottom-0 h-[54px] w-full -ml-5 px-5">
        <div className="flex items-center border-t-[1px] h-full border-t-gray-300 w- mx-auto">
          <p className="text-sm">Start from 1, Jan 2021</p>
        </div>
      </div>
    </div>
  );
};
