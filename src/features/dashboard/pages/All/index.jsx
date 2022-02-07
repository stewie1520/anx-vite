import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// icons
import {
    EyeIcon,
    BriefcaseIcon,
    PlusIcon,
    UserGroupIcon,
    ShoppingCartIcon,
    SelectorIcon,
    CheckIcon,
} from '@heroicons/react/solid';

// components
import { Listbox, Transition } from '@headlessui/react';
import { ChartViewsAndSells, RowUser } from '@/features/dashboard/components';

// hooks
import { useDocumentTitle } from '@/hooks';

// selectors
import { selectUsers } from '@/features/dashboard/redux/selectors';
// actions
import { userFetchingStarted } from '@/features/dashboard/redux/slice';

const chartViewSalesOptions = [
    { name: 'This week', value: 'week' },
    { name: 'This month', value: 'month' },
];

const DashboardPage = () => {
    useDocumentTitle('Dashboard');
    const dispatch = useDispatch();

    const usersData = useSelector(selectUsers);
    const [chartViewSaleSelectedOption, setChartViewSaleSelectedOption] = useState(chartViewSalesOptions[0]);

    useEffect(() => {
        dispatch(userFetchingStarted());
    }, []);

    return (
        <Fragment>
            <div className="relative bg-gray-100 px-6 pt-4">
                <div className="relative pb-4">
                    <h1 className="font-bold text-dark-blue text-2xl">Dashboard</h1>
                </div>
                <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-3">
                    {/* chart */}
                    <div className="relative bg-blue-400 text-white h-[240px] p-5">
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
                    {/* chart */}
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
                    {/* chart */}
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
                    {/* chart */}
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
                </div>
                <div className="grid grid-cols-3 gap-4 my-4 items-start">
                    <div className="col-span-2 bg-white shadow-lg rounded-sm border border-gray-200">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-dark-blue bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Email</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Spent</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Country</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                                {
                                    usersData.length ?
                                        usersData.map((userData, idx) =>
                                            <RowUser
                                                key={idx}
                                                imageUrl={userData.imageUrl}
                                                name={userData.name}
                                                email={userData.email}
                                                spent={userData.spent}
                                                country={userData.country} />)
                                        : Array.from({ length: 5 }).map((_, idx) => <RowUser key={idx} empty />)
                                }
                            </tbody>
                        </table>
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
