import { ShoppingCartIcon } from '@heroicons/react/solid';

export const WidgetTotalSales = () => {
  return (
    <div className="relative bg-white text-gray-500 h-[240px] p-5">
      <div className="flex justify-between">
        <div className="h-[60px] w-[60px] bg-gray-100 p-3">
          <ShoppingCartIcon className="text-emerald-600" />
        </div>
        <div className="text-white ">
        </div>
      </div>
      <div className="flex flex-col my-4">
        <p>Total Sells</p>
        <h1 className="font-semibold text-3xl text-dark-blue">1,028,623</h1>
      </div>
      <div className="absolute bottom-0 h-[54px] w-full -ml-5 px-5">
        <div className="flex items-center border-t-[1px] h-full border-t-gray-300 w- mx-auto">
          <p className="text-sm">Start from 1, Jan 2021</p>
        </div>
      </div>
    </div>
  );
};
