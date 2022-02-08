import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

// icons
import {
  MoonIcon,
  UserIcon,
  CogIcon,
  LogoutIcon,
  KeyIcon,
} from '@heroicons/react/solid';
import { ChevronDownIcon } from '@heroicons/react/outline';

// hooks
import { useDarkMode } from '@/hooks';

const UserHeaderMenu = () => {
  const [darkModeEnabled, setEnableDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setEnableDarkMode(!darkModeEnabled);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex justify-center items-center space-x-1">
        <img className="rounded-full w-10 h-10" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" />
        <ChevronDownIcon className="w-5 h-5 text-gray-200 text-xs" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800 dark:ring-slate-700 dark:divide-slate-700">
          <div className="px-1 py-1 ">
            <Menu.Item>
              <button
                className="text-gray-500 group flex hover:bg-blue-500 hover:text-white rounded-md items-center w-full px-2 py-2 text-sm dark:text-gray-300">
                <UserIcon
                  className="w-5 h-5 mr-2 text-blue-400 hover:text-blue-100"
                  aria-hidden="true"
                />
                My account
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className="text-gray-500 group flex hover:bg-blue-500 hover:text-white rounded-md items-center w-full px-2 py-2 text-sm dark:text-gray-300">
                <CogIcon
                  className="w-5 h-5 mr-2 text-blue-400 hover:text-blue-100"
                  aria-hidden="true"
                />
                Settings
              </button>
            </Menu.Item>
          </div>
          <div className="px-1 py-1 ">
            <Menu.Item>
              <button
                className="text-gray-500 group flex hover:bg-blue-500 hover:text-white rounded-md items-center w-full px-2 py-2 text-sm dark:text-gray-300">
                <KeyIcon
                  className="w-5 h-5 mr-2 text-blue-400 hover:text-blue-100"
                  aria-hidden="true"
                />
                Change Password
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={toggleDarkMode}
                className="text-gray-500 group flex hover:bg-blue-500 hover:text-white rounded-md items-center w-full px-2 py-2 text-sm dark:text-gray-300">
                <MoonIcon
                  className="w-5 h-5 mr-2 text-blue-400 hover:text-blue-100"
                  aria-hidden="true"
                />
                {darkModeEnabled ? 'Light mode' : 'Dark mode'}
              </button>
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              <button
                className="text-gray-500 group flex hover:bg-blue-500 hover:text-white rounded-md items-center w-full px-2 py-2 text-sm dark:text-gray-300">
                <LogoutIcon
                  className="w-5 h-5 mr-2 text-blue-400 hover:text-blue-100"
                  aria-hidden="true"
                />
                Log out
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export { UserHeaderMenu };
