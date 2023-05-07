import type { InputHTMLAttributes, HTMLInputTypeAttribute, FC } from 'react';
import type { UnionSubType } from '@/types/base';
import type { FormElemSizeClassList, FormElemProps } from '@/types/forms';
import BaseIcon, { type Icons } from '@/components/BaseIcon';
import { keyify } from '@/utils/helpers';

type OpenTypeOptions = 'text' | 'number';
type SetTypeOptions = 'email' | 'password' | 'search' | 'tel' | 'url';
type TypeOptions = OpenTypeOptions | SetTypeOptions;

type IconList = {
  [key in TypeOptions]: Icons;
};

interface ClassList {
  size: FormElemSizeClassList;
  iconSize: FormElemSizeClassList;
  icon: IconList;
}

interface BaseProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FormElemProps {}

interface NoIconsProps extends BaseProps {
  type: UnionSubType<HTMLInputTypeAttribute, SetTypeOptions>;
  icon?: never;
}

interface IconsProps extends BaseProps {
  type: UnionSubType<HTMLInputTypeAttribute, OpenTypeOptions>;
  icon?: Icons;
}

type BaseInputProps = IconsProps | NoIconsProps;

const BaseInput: FC<BaseInputProps> = ({
  type,
  error,
  icon,
  label,
  fieldSize = 'md',
  hasIcon = false,
  hideLabel = false,
  className = '',
  ...props
}) => {
  const inputClassList: ClassList = {
    size: {
      sm: !!hasIcon ? 'text-sm pr-5 pl-13 py-2 h-9' : 'text-sm px-5 py-2 h-9',
      xs: !!hasIcon ? 'text-xs pr-3 pl-12 py-2 h-8' : 'text-xs px-3 py-2 h-8',
      md: !!hasIcon ? 'text-sm pr-8 pl-14 py-3 h-11' : 'text-sm px-8 py-3 h-11',
      lg: !!hasIcon ? 'text-sm pr-9 pl-16 py-4 h-13' : 'text-sm px-9 py-4 h-13',
    },
    iconSize: {
      sm: 'text-sm w-9',
      xs: 'text-xs w-8',
      md: 'text-sm w-10',
      lg: 'text-base w-12',
    },
    icon: {
      email: 'reg-envelope-open-text',
      number: 'reg-hashtag',
      password: 'reg-key',
      search: 'reg-magnifying-glass',
      tel: 'reg-phone',
      text: 'reg-text-size',
      url: 'reg-link',
    },
  };
  const {
    icon: iconClass,
    iconSize: iconSizeClass,
    size: sizeClass,
  } = inputClassList;

  const iconName =
    (type === 'text' || type === 'number') && icon ? icon : iconClass[type];

  return (
    <div
      className={`inline-block min-w-[12rem] ${className}`}
      data-component="input"
    >
      <label
        htmlFor={keyify(label)}
        className={`mb-1 inline-block px-1 text-xs font-medium ${
          hideLabel ? 'sr-only' : ''
        }`}
      >
        {label}
      </label>

      <div className="relative">
        {hasIcon && (
          <span
            className={`text- absolute bottom-1 left-1 top-1 flex items-center justify-center rounded-l bg-secondary text-white ${iconSizeClass[fieldSize]}`}
          >
            <BaseIcon icon={iconName} />
          </span>
        )}

        <input
          id={keyify(label)}
          type={type}
          className={`w-full rounded border border-gray-300 bg-white leading-none transition-all duration-150 ease-in-out hover:border-gray-400 ${sizeClass[fieldSize]}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default BaseInput;
