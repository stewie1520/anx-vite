import { createContext, Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import { Disclosure, Transition } from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { selectCollapse, toggleCollapse } from '@/store/slices/layoutSlice';
import { useHiddenAfterSidebarTransitionEnd } from '@/hooks';

const collapseContext = createContext();
export const useNavlinkSidebarCollapseContext = () => {
  const context = useContext(collapseContext);
  return context;
};

export const NavLinkSidebarCollapse = ({ icon: Icon, title, children }) => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useSelector(selectCollapse);
  const [isClosureOpen, setIsClosureOpen] = useState(false);
  const isHidden = useHiddenAfterSidebarTransitionEnd();

  const navLinkCollapseClass = isHidden ? 'justify-center' : null;
  const hiddenClass = isHidden ? 'hidden' : null;
  const hiddenPadding3 = isHidden ? 'py-3' : 'p-3';
  const hiddenCenter = isHidden ? 'justify-center' : null;

  const handleDisclosureButtonClicked = () => {
    if (isSidebarCollapsed) {
      dispatch(toggleCollapse());
      setIsClosureOpen(true); // just let the sidebar expands and do nothing with the closure panel
      return;
    }

    setIsClosureOpen(!isClosureOpen);
  };

  return (
    <collapseContext.Provider value={{}}>
      <div className="text-gray-400">
        <Disclosure
          defaultOpen={isClosureOpen}
          as={Fragment}>
          {() => (
            <>
              <Disclosure.Button as={Fragment}>
                {({ open }) => {
                  const className = open ? 'rotate-180' : null;
                  return (
                    <button className={cx(navLinkCollapseClass, hiddenPadding3, hiddenCenter, 'flex items-center w-full flex-nowrap overflow-x-hidden space-x-4 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-700')}
                      onClick={handleDisclosureButtonClicked}>
                      <Icon className="w-6 h-6" />
                      <span className={cx('font-medium text-left', hiddenClass)}>{title}</span>
                      <div className={cx(hiddenClass)}>
                        <ChevronDownIcon className={cx('w-4 transition-transform ease-in-out delay-150', className)} />
                      </div>
                    </button>
                  );
                }}
              </Disclosure.Button>
              <Transition
                show={isClosureOpen}
                enter="transition-[height] duration-100 ease-in-out"
                enterFrom="transform h-0"
                enterTo="transform h-full"
                leave="transition-[height] duration-100 ease-out"
                leaveFrom="transform h-full"
                leaveTo="transform h-0">
                <Disclosure.Panel static>
                  <div className={cx('ml-2', hiddenClass)} >
                    {children}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div >
    </collapseContext.Provider>
  );
};

NavLinkSidebarCollapse.propTypes = {
  icon: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};
