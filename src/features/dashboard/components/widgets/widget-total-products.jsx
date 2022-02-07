import { BriefcaseIcon, PlusIcon } from '@heroicons/react/solid';

export const WidgetTotalProducts = () => {
  return (
    <div className="relative bg-white text-gray-500 h-[240px] p-5">
      <div className="flex justify-between">
        <div className="h-[60px] w-[60px] bg-gray-100 p-3">
          <BriefcaseIcon className="text-green-600" />
        </div>
        <div className="text-white ">
        </div>
      </div>
      <div className="flex flex-col my-4">
        <p>Total Products</p>
        <h1 className="font-semibold text-3xl text-dark-blue">10,820</h1>
      </div>
      <div className="absolute bottom-0 h-[54px] w-full -ml-5 px-5">
        <div className="flex items-center border-t-[1px] h-full border-t-gray-300 w- mx-auto">
          <a className="text-sm text-blue-500 hover:text-blue-400 cursor-pointer">
            <PlusIcon className="h-5 w-5 inline -mt-1" /> Add New Product</a>
        </div>
      </div>
    </div>
  );
};
