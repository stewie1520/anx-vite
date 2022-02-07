import { Fragment, useState } from 'react';

// icons
import {
    SelectorIcon,
    CheckIcon,
} from '@heroicons/react/solid';

// components
import { Listbox, Transition } from '@headlessui/react';
import { ChartViewsAndSells } from '@/features/dashboard/components';
import { TableUser } from '@/features/dashboard/components/table';
import {
    WidgetTotalViews,
    WidgetTotalProducts,
    WidgetTotalUsers,
    WidgetTotalSales,
} from '@/features/dashboard/components/widgets';

// hooks
import { useDocumentTitle } from '@/hooks';

const chartViewSalesOptions = [
    { name: 'This week', value: 'week' },
    { name: 'This month', value: 'month' },
];

const DashboardPage = () => {
    useDocumentTitle('Dashboard');
    const [chartViewSaleSelectedOption, setChartViewSaleSelectedOption] = useState(chartViewSalesOptions[0]);

    return (
        <Fragment>
            <div className="relative bg-gray-100 px-6 pt-4">
                <div className="relative pb-4">
                    <h1 className="font-bold text-dark-blue text-2xl">Dashboard</h1>
                </div>
                <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-3">
                    <WidgetTotalViews />
                    <WidgetTotalProducts />
                    <WidgetTotalUsers />
                    <WidgetTotalSales />
                </div>
                <div className="grid grid-cols-3 gap-4 my-4 items-start">
                    <div className="col-span-2 bg-white shadow-lg rounded-sm border border-gray-200">
                        <TableUser />
                    </div>
                    <div className="bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="flex justify-between p-5">
                            <p className="text-dark-blue font-semibold font-sm">Views & Sells</p>
                            <Listbox value={chartViewSaleSelectedOption} onChange={setChartViewSaleSelectedOption}>
                                <div className="relative">
                                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-100 rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                        <span className="block truncate">{chartViewSaleSelectedOption.name}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <SelectorIcon
                                                className="w-5 h-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {chartViewSalesOptions.map((option, idx) => (
                                                <Listbox.Option
                                                    key={idx}
                                                    className={({ active }) => `${active ? 'text-blue-900 bg-blue-100' : 'text-gray-900'}
                                                    cursor-default select-none relative py-2 pl-10 pr-4`}
                                                    value={option}>
                                                    {({ selected, active }) => (
                                                        <>
                                                            <span
                                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                                    } block truncate`}
                                                            >
                                                                {option.name}
                                                            </span>
                                                            {selected ? (
                                                                <span
                                                                    className={`${active ? 'text-blue-600' : 'text-blue-600'
                                                                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                                >
                                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}

                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <div className="flex w-full px-5 pb-5 overflow-x-auto">
                            <ChartViewsAndSells />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DashboardPage;
