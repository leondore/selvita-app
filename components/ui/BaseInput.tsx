import type { InputHTMLAttributes, HTMLInputTypeAttribute, FC } from 'react';
import type { UnionSubType } from '@/types';
import type { FormClassList, FormElemProps } from '@/types';
import BaseIcon, { type Icons } from '@/components/ui/BaseIcon';
import { keyify } from '@/lib/utils';

type OpenTypeOptions = 'text' | 'number';
type SetTypeOptions = 'email' | 'password' | 'search' | 'tel' | 'url';
type TypeOptions = OpenTypeOptions | SetTypeOptions;

type IconList = {
  [key in TypeOptions]: Icons;
};

interface ClassList extends FormClassList {
  icon: IconList;
}

interface BaseProps
  extends InputHTMLAttributes<HTMLInputElement>,
    FormElemProps {
  withButton?: boolean;
}

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
  withButton = false,
  background = 'white',
  className = '',
  ...props
}) => {
  const inputClassList: ClassList = {
    size: {
      sm: !!hasIcon ? 'text-sm pr-7 pl-13 py-2 h-9' : 'text-sm px-5 py-2 h-9',
      xs: !!hasIcon ? 'text-xs pr-5 pl-12 py-2 h-8' : 'text-xs px-3 py-2 h-8',
      md: !!hasIcon ? 'text-sm pr-8 pl-14 py-3 h-11' : 'text-sm px-6 py-3 h-11',
      lg: !!hasIcon ? 'text-sm pr-9 pl-16 py-4 h-13' : 'text-sm px-7 py-4 h-13',
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
    background: {
      white:
        'bg-white text-gray-900 border-gray-300 hover:border-gray-400 placeholder:text-gray-400',
      gray: 'bg-gray-100 text-gray-900 border-gray-300 hover:border-gray-400 placeholder:text-gray-400',
      dark: 'bg-dark text-gray-200 border-white/40 hover:border-white/50 placeholder:text-white/50',
    },
  };
  const {
    icon: iconClass,
    iconSize: iconSizeClass,
    size: sizeClass,
    background: bgClass,
  } = inputClassList;

  const roundedClass = withButton ? 'rounded-l' : 'rounded';

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
            className={`absolute bottom-1 left-1 top-1 z-10 flex items-center justify-center rounded bg-secondary text-sm text-white ${iconSizeClass[fieldSize]}`}
          >
            <BaseIcon icon={iconName} />
          </span>
        )}

        <input
          id={keyify(label)}
          type={type}
          className={`w-full border leading-none transition-all duration-150 ease-in-out ${roundedClass} ${sizeClass[fieldSize]} ${bgClass[background]}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default BaseInput;
