import { Fragment } from 'react';
import cx from 'classnames';

import { Popover, Transition } from '@headlessui/react';
import { ItemNotification } from './item-notification';

import { BellIcon, DotsHorizontalIcon } from '@heroicons/react/outline';

const NotificationHeaderButton = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={
            cx(
              'flex items-center bg-gray-100 relative justify-center text-gray-400 w-10 h-10 rounded-full dark:bg-slate-600',
              open ? 'text-blue-400 bg-blue-100 hover:text-blue-300 dark:text-slate-100 dark:hover:text-slate-300 dark:bg-slate-500' : 'hover:text-gray-300 dark:text-slate-100',
            )
          }>
            <div className="w-2 h-2 bg-red-400 rounded-full absolute right-2 top-2"></div>
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
            <Popover.Panel className="absolute w-screen overflow-auto max-h-[600px] max-w-md right-0 z-10 p-5 rounded-md border border-gray-200 shadow-xl bg-white dark:bg-slate-800 dark:border-slate-700">
              <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                  <p className="font-semibold text-dark-blue dark:text-white">Notification</p>
                  <div>
                    <button className="bg-transparent hover:bg-gray-100 p-2 rounded-full text-gray-500 dark:hover:bg-slate-700">
                      <DotsHorizontalIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <button className="bg-blue-100 px-5 py-1 rounded-xl text-md font-medium text-blue-500 dark:bg-slate-700">All</button>
                  <button className="bg-gray-100 px-5 py-1 rounded-xl text-md font-medium text-gray-500 dark:bg-slate-700 dark:text-gray-300">Unread</button>
                </div>
                <div className="my-2">
                  <p className="font-medium text-dark-blue text-md dark:text-gray-200">Today</p>
                </div>
                <div className="flex flex-col divide-y-[1px] divide-gray-100 dark:divide-slate-700">
                  <ItemNotification
                    content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi esse sunt laudantium tempora'
                    imageAlt='hieu'
                    imageUrl='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg'
                    title='New friend request'
                    at={new Date('2022-02-06')}
                    unread
                  />
                  <ItemNotification
                    content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi esse sunt laudantium tempora Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi esse sunt laudantium tempora'
                    imageAlt='hieu'
                    imageUrl='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg'
                    title='New friend request'
                    at={new Date('2021-12-01')}
                  />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export { NotificationHeaderButton };
