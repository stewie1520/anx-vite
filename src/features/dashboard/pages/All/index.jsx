import { Fragment, useState } from 'react';

import { ChartViewsAndSells, ListboxViewsSales } from '@/features/dashboard/components';
import { TableUser } from '@/features/dashboard/components/table';
import {
    WidgetTotalViews,
    WidgetTotalProducts,
    WidgetTotalUsers,
    WidgetTotalSales,
} from '@/features/dashboard/components/widgets';

// hooks
import { useDocumentTitle } from '@/hooks';

const DashboardPage = () => {
    useDocumentTitle('Dashboard');
    const [filterChartViewSaleBy, setFilterChartViewSaleBy] = useState('week');

    const onListboxViewsSaleChange = (option) => {
        setFilterChartViewSaleBy(option.value);
    };

    return (
        <Fragment>
            <div className="relative bg-gray-100 dark:bg-slate-900 px-6 pt-4">
                <div className="relative pb-4">
                    <h1 className="font-bold text-dark-blue dark:text-gray-100 text-2xl">Dashboard</h1>
                </div>
                <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-3">
                    <WidgetTotalViews />
                    <WidgetTotalProducts />
                    <WidgetTotalUsers />
                    <WidgetTotalSales />
                </div>
                <div className="grid grid-cols-3 gap-4 my-4 items-start">
                    <div className="col-span-2 bg-white shadow-lg rounded-sm border border-gray-200 dark:border-slate-700">
                        <TableUser />
                    </div>
                    <div className="bg-white shadow-lg rounded-sm border border-gray-200 dark:border-slate-700 dark:bg-slate-800">
                        <div className="flex justify-between p-5">
                            <p className="text-dark-blue font-semibold font-sm dark:text-gray-400">Views & Sells</p>
                            <ListboxViewsSales onChange={onListboxViewsSaleChange} />
                        </div>
                        <div className="flex w-full px-5 pb-5 overflow-x-auto">
                            <ChartViewsAndSells filterBy={filterChartViewSaleBy} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DashboardPage;
