import { Fragment } from 'react';

// icons
import {
    EyeIcon,
    BriefcaseIcon,
    PlusIcon,
    UserGroupIcon,
    ShoppingCartIcon,
} from '@heroicons/react/solid';

// components
import { ChartViewsAndSells } from '@/features/products/components';

// hooks
import { useDocumentTitle } from '@/hooks';

const ProductAllPage = () => {

    useDocumentTitle('Dashboard');

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
                                <ShoppingCartIcon className="text-blue-400" />
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
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800">Alex Shatov</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">alexshatov@gmail.com</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">$2,890.66</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">🇺🇸</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach" /></div>
                                            <div className="font-medium text-gray-800">Philip Harbach</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">philip.h@gmail.com</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">$2,767.04</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">🇩🇪</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk" /></div>
                                            <div className="font-medium text-gray-800">Mirko Fisuk</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">mirkofisuk@gmail.com</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">$2,996.00</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">🇫🇷</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo" /></div>
                                            <div className="font-medium text-gray-800">Olga Semklo</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">olga.s@cool.design</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">$1,220.66</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">🇮🇹</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long" /></div>
                                            <div className="font-medium text-gray-800">Burak Long</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">longburak@gmail.com</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">$1,890.66</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">🇬🇧</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="flex justify-between p-5">
                            <p className="text-dark-blue font-semibold font-sm">Views & Sells</p>
                            <select className="text-sm text-gray-400 py-1 px-2 rounded-sm bg-gray-100">
                                <option selected>This week</option>
                                <option>This months</option>
                            </select>
                        </div>
                        <div className="flex w-full h-[400px] px-5 pb-5 overflow-auto">
                            <ChartViewsAndSells />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductAllPage;
