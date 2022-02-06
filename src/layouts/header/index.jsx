import { useSelector } from 'react-redux';
import { Popover, Transition } from '@headlessui/react';

import { selectLayout } from '@/store/slices/layoutSlice';

import { BellIcon, ChatIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import cx from 'classnames';

const Header = () => {
    const { header } = useSelector(selectLayout);

    if (!header) {
        return null;
    }

    return (
        <div className="relative bg-white">
            <div className="max-w-8xl mx-auto">
                <div className="flex justify-between items-center border-b-2 border-gray-200 py-5 px-6">
                    {/* search box */}
                    <div className="relative text-gray-600 inline-block">
                        <div className="absolute text-gray-600 left-5 w-5 h-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <SearchIcon className="text-gray-400" />
                        </div>
                        <input className="bg-gray-100 h-10 pl-9 pr-3 text-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            type="search" name="search" placeholder="Search everything.." />
                        <button type="submit" className="bg-blue-400 text-white text-sm h-10 px-5 font-bold hover:bg-blue-500" >
                            Search
                        </button>
                    </div>
                    {/* notification, chat */}
                    <div className="ml-auto flex space-x-3">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button className={
                                        cx(
                                            'flex items-center justify-center bg-transparent text-gray-400 w-10 h-10 rounded-full',
                                            open ? 'text-blue-400 hover:text-blue-300' : 'hover:text-gray-300',
                                        )
                                    }>
                                        <BellIcon className="w-6 h-6" />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1">
                                        <Popover.Panel className="absolute w-screen max-w-md right-0 z-10 p-5 rounded-md border border-gray-200 shadow-xl bg-white">
                                            <div className="flex flex-col space-y-3">
                                                <div className="flex w-full hover:bg-gray-50 p-2 rounded-sm cursor-pointer">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long" /></div>
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-gray-600">Burak Long</span>
                                                        <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi esse sunt laudantium tempora </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button className={
                                        cx(
                                            'flex items-center justify-center bg-transparent text-gray-400 w-10 h-10 rounded-full',
                                            open ? 'text-blue-400 hover:text-blue-300' : 'hover:text-gray-300',
                                        )
                                    }>
                                        <ChatIcon className="w-6 h-6" />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1">
                                        <Popover.Panel className="absolute w-screen max-w-md right-0 z-10 p-5 rounded-md border border-gray-200 shadow-xl bg-white">
                                            <div className="flex flex-col space-y-3">
                                                <div className="flex w-full hover:bg-gray-50 p-2 rounded-sm cursor-pointer">
                                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long" /></div>
                                                    <div className="flex flex-col">
                                                        <span className="font-medium text-gray-600">Burak Long</span>
                                                        <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi esse sunt laudantium tempora </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <button className="flex relative justify-center items-center space-x-1">
                            <img className="rounded-full w-10 h-10" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" />
                            <ChevronDownIcon className="w-5 h-5 text-gray-200 text-xs" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

