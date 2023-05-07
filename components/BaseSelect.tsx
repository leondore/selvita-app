import type { FC } from 'react';
import type {
  FormElemSizeClassList,
  FormElemProps,
  SelectOption,
} from '@/types/forms';
import { Listbox, Transition } from '@headlessui/react';
import BaseIcon, { type Icons } from '@/components/BaseIcon';

interface BaseSelectProps extends FormElemProps {
  icon?: Icons;
  className?: string;
  options: SelectOption[];
  value: string;
  handler: (value: string) => void;
}

const BaseSelect: FC<BaseSelectProps> = ({
  error,
  icon,
  label,
  options,
  value,
  handler,
  fieldSize = 'md',
  hasIcon = false,
  hideLabel = false,
  className = '',
}) => {
  return (
    <div className={`relative inline-block min-w-[12rem] ${className}`}>
      <Listbox value={value} onChange={handler}>
        <Listbox.Label>{label}:</Listbox.Label>
        <Listbox.Button>{value}</Listbox.Button>
        <Listbox.Options>
          {options.map((option) => (
            <Listbox.Option
              key={option.id}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default BaseSelect;
