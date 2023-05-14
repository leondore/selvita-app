import '@/components/BaseSelect.css';

import { Fragment, useState, type FC, SyntheticEvent } from 'react';
import type { FormElemProps, SelectOption } from '@/types/forms';
import { Listbox, Transition } from '@headlessui/react';
import BaseIcon, { type Icons } from '@/components/BaseIcon';

interface BaseSelectProps extends FormElemProps {
  icon?: Icons;
  className?: string;
  options: SelectOption[];
  placeholder?: string;
}

interface SingleProps extends BaseSelectProps {
  multiple?: false;
  value?: SelectOption;
  defaultValue?: SelectOption;
  handler?: (value: SelectOption) => void;
}

interface MultiProps extends BaseSelectProps {
  multiple?: true;
  value?: SelectOption[];
  defaultValue?: SelectOption[];
  handler?: (value: SelectOption[]) => void;
}

type SelectProps = SingleProps | MultiProps;

function setOptionsPosition(
  event: SyntheticEvent<HTMLButtonElement, MouseEvent>
) {
  const windowBottom = window.innerHeight;
  const { bottom } = event.currentTarget.getBoundingClientRect();

  if (windowBottom - bottom < 240) {
    return 'bottom-full mb-1.5';
  }

  return 'mt-1.5';
}

const BaseSelect: FC<SelectProps> = ({
  error,
  icon,
  label,
  options,
  name,
  value,
  defaultValue,
  handler,
  placeholder,
  multiple = false,
  fieldSize = 'md',
  hideLabel = false,
  className = '',
}) => {
  const [posClass, setPosClass] = useState('mt-1.5');

  const selectClassList = {
    size: {
      sm: !!icon ? 'text-sm pr-7 pl-13 py-2 h-9' : 'text-sm px-5 py-2 h-9',
      xs: !!icon ? 'text-xs pr-5 pl-12 py-2 h-8' : 'text-xs px-3 py-2 h-8',
      md: !!icon ? 'text-sm pr-8 pl-14 py-3 h-11' : 'text-sm px-6 py-3 h-11',
      lg: !!icon ? 'text-sm pr-9 pl-16 py-4 h-13' : 'text-sm px-7 py-4 h-13',
    },
    iconSize: {
      sm: 'text-sm w-9',
      xs: 'text-xs w-8',
      md: 'text-sm w-10',
      lg: 'text-base w-12',
    },
  };
  const { iconSize: iconSizeClass, size: sizeClass } = selectClassList;

  return (
    <div
      className={`sdc-select relative inline-block min-w-[12rem] ${className}`}
      data-component="select"
    >
      <Listbox
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={handler}
        multiple={multiple}
      >
        <Listbox.Label
          className={`mb-1 inline-block px-1 pr-6 text-xs font-medium ${
            hideLabel ? 'sr-only' : ''
          }`}
        >
          {label}:
        </Listbox.Label>

        <div className="relative">
          {!!icon && (
            <span
              className={`absolute bottom-1 left-1 top-1 z-10 flex items-center justify-center rounded bg-secondary text-base text-white ${iconSizeClass[fieldSize]}`}
            >
              <BaseIcon icon={icon} />
            </span>
          )}

          <Listbox.Button
            className={`relative w-full cursor-default rounded border border-gray-300 bg-white text-left leading-none transition-all duration-150 ease-in-out hover:border-gray-400 ${sizeClass[fieldSize]}`}
            onClick={(e) => setPosClass(setOptionsPosition(e))}
          >
            {({ value }) => (
              <>
                <span
                  className={`block truncate ${
                    !Array.isArray(value) && value.value.length === 0
                      ? 'text-gray-400'
                      : ''
                  }`}
                >
                  {Array.isArray(value) && value.length === 0 && (
                    <span className="text-gray-400">
                      {placeholder || label}
                    </span>
                  )}
                  {Array.isArray(value)
                    ? value.map((val) => val.label).join(', ')
                    : value.label}
                </span>

                <span className="pointer-events-none absolute inset-y-0 right-0 flex w-9 items-center justify-center">
                  <BaseIcon
                    icon="reg-chevron-down"
                    className="chevron text-gray-600 transition-transform duration-200 ease-in-out"
                    aria-hidden="true"
                  />
                </span>
              </>
            )}
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={`absolute max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${posClass}`}
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className="relative cursor-default select-none py-2 pl-10 pr-4 text-xs text-gray-800 ui-active:bg-accent/20 ui-active:text-amber-900 ui-disabled:cursor-not-allowed ui-disabled:text-gray-300"
                  value={option}
                  disabled={option.disabled}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-sm text-accent">
                          <BaseIcon icon="reg-spa" aria-hidden="true" />
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
  );
};

export default BaseSelect;
