import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import { Disclosure, Transition } from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { selectCollapse } from '@/store/slices/layoutSlice';

import { toggleCollapse } from '@/store/slices/layoutSlice';


export const NavLinkSidebarCollapse = ({ icon: Icon, title, children }) => {
  const dispatch = useDispatch();
  // const refDisclosureButton = useRef();
  const isSidebarCollapsed = useSelector(selectCollapse);

  const navLinkCollapseClass = isSidebarCollapsed ? 'justify-center' : null;
  const hiddenClass = isSidebarCollapsed ? 'hidden' : null;
  const hiddenPadding3 = isSidebarCollapsed ? 'py-3' : 'p-3';
  const hiddenCenter = isSidebarCollapsed ? 'justify-center' : null;

  // useEffect(() => {
  //   refDisclosureButton.current.addEventListener('click', handleDisclosureButtonClicked);
  //   return () => {
  //     refDisclosureButton.current?.removeEventListener('click', handleDisclosureButtonClicked);
  //   };
  // });

  const handleDisclosureButtonClicked = (e) => {
    if (isSidebarCollapsed) {
      e.stopPropagation(); // just let the sidebar expands and do nothing with the closure panel
      dispatch(toggleCollapse());
    }
  };


  return (
    <div className="text-gray-400">
      <Disclosure
        defaultOpen={true}
        as={Fragment}>
        <Disclosure.Button as={Fragment}
        >
          <button className={cx(navLinkCollapseClass, hiddenPadding3, hiddenCenter, 'flex w-full items-center space-x-4 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700')}
            onClick={handleDisclosureButtonClicked}>
            <Icon className="w-6 h-6" />
            <span className={cx('font-medium text-left', hiddenClass)}>{title}</span>
            <div className={cx(hiddenClass)}>
              <ChevronDownIcon className="h-4" />
            </div>
          </button>
        </Disclosure.Button>
        <Transition
          enter="transition-[max-height] duration-100 ease-in-out"
          enterFrom="transform max-h-0"
          enterTo="transform max-h-full"
          leave="transition-[max-height] duration-100 ease-out"
          leaveFrom="transform max-h-full"
          leaveTo="transform max-h-0">
          <Disclosure.Panel>
            <div className={cx('ml-2', hiddenClass)} >
              {children}
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div >
  );
};

NavLinkSidebarCollapse.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};
