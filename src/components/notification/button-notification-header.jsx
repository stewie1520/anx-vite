import { Fragment } from 'react';
import cx from 'classnames';

import { Popover, Transition } from '@headlessui/react';

import { BellIcon, DotsHorizontalIcon } from '@heroicons/react/outline';

const NotificationHeaderButton = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className={
            cx(
              'flex items-center relative justify-center bg-transparent text-gray-400 w-10 h-10 rounded-full',
              open ? 'text-blue-400 hover:text-blue-300' : 'hover:text-gray-300',
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
            <Popover.Panel className="absolute w-screen max-w-md right-0 z-10 p-5 rounded-md border border-gray-200 shadow-xl bg-white">
              <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                  <p className="font-semibold text-dark-blue">Notification</p>
                  <div>
                    <button className="bg-transparent hover:bg-gray-100 p-2 rounded-full text-gray-500">
                      <DotsHorizontalIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex mb-4 space-x-1">
                  <button className="bg-blue-100 px-5 py-1 rounded-xl text-md font-medium text-blue-500">All</button>
                  <button className="bg-gray-100 px-5 py-1 rounded-xl text-md font-medium text-gray-500">Unread</button>
                </div>
                <div className="flex flex-col divide-y-[1px] divide-gray-100">
                  <div className="flex w-full hover:bg-gray-50 p-2 rounded-sm cursor-pointer">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long" /></div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-600">Burak Long</span>
                      <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi esse sunt laudantium tempora </span>
                    </div>
                  </div>
                  <div className="flex w-full hover:bg-gray-50 p-2 rounded-sm cursor-pointer">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long" /></div>
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-600">Burak Long</span>
                      <span className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores commodi esse sunt laudantium tempora </span>
                    </div>
                  </div>
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
