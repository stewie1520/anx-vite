import { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

// icons
import {
  SelectorIcon,
  CheckIcon,
} from '@heroicons/react/solid';

// components
import { Listbox, Transition } from '@headlessui/react';

const chartViewSalesOptions = [
  { name: 'This week', value: 'week' },
  { name: 'This month', value: 'month' },
];

export const ListboxViewsSales = ({ onChange }) => {
  const [chartViewSaleSelectedOption, setChartViewSaleSelectedOption] = useState(chartViewSalesOptions[0]);

  const handleOnChange = (option) => {
    if (onChange) {
      onChange(option);
    }

    setChartViewSaleSelectedOption(option);
  };

  return (
    <Listbox value={chartViewSaleSelectedOption} onChange={handleOnChange}>
      <div className="relative w-1/2">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-100 rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm dark:bg-slate-700 dark:text-gray-300 dark:focus-visible:ring-offset-blue-500 dark:focus-visible:ring-slate-600">
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
          <Listbox.Options className="absolute w-full py-1 mt-1 z-50 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-slate-700">
            {chartViewSalesOptions.map((option, idx) => (
              <Listbox.Option
                key={idx}
                className={({ active }) => `${active ? 'text-blue-900 bg-blue-100 dark:text-gray-300 dark:bg-slate-600' : 'text-gray-900 dark:text-gray-300'}
                                                    cursor-pointer select-none relative py-2 pl-10 pr-2`}
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
                        className={`${active ? 'text-blue-600 dark:text-blue-300' : 'text-blue-600 dark:text-blue-300'
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
  );
};

ListboxViewsSales.propTypes = {
  onChange: PropTypes.func,
};
