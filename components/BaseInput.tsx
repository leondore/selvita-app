import type { InputHTMLAttributes, HTMLInputTypeAttribute, FC } from 'react';
import type { UnionSubType, FieldSize, FieldSizeClassList } from '@/types/base';
import BaseIcon, { type Icons } from '@/components/BaseIcon';

type OpenTypeOptions = 'text' | 'number';
type SetTypeOptions = 'email' | 'password' | 'search' | 'tel' | 'url';
type TypeOptions = OpenTypeOptions | SetTypeOptions;

type IconList = {
  [key in TypeOptions]: Icons;
};

interface ClassList {
  size: FieldSizeClassList;
  iconSize: FieldSizeClassList;
  icon: IconList;
}

interface BaseProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fieldSize?: FieldSize;
  hasIcon?: boolean;
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
  fieldSize = 'base',
  hasIcon = false,
  className = '',
  ...props
}) => {
  const inputClassList: ClassList = {
    size: {
      base: !!hasIcon
        ? 'text-sm pr-8 pl-16 py-3 rounded-md h-11'
        : 'text-sm px-8 py-3 rounded-md h-11',
      md: !!hasIcon
        ? 'text-sm pr-5 pl-14 py-2 rounded h-9'
        : 'text-sm px-5 py-2 rounded h-9',
      sm: !!hasIcon
        ? 'text-xs pr-3 pl-12 py-2 rounded h-8'
        : 'text-xs px-3 py-2 rounded h-8',
      lg: !!hasIcon
        ? 'text-sm pr-9 pl-17 py-4 rounded-md h-13'
        : 'text-sm px-9 py-4 rounded-md h-13',
    },
    iconSize: {
      base: 'text-base w-11',
      md: 'text-md w-9',
      sm: 'text-sm w-8',
      lg: 'text-base w-13',
    },
    icon: {
      email: 'lgt-envelope',
      number: 'lgt-hashtag',
      password: 'lgt-key',
      search: 'lgt-magnifying-glass',
      tel: 'lgt-phone',
      text: 'lgt-text-size',
      url: 'lgt-link',
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
    <div className="relative">
      {hasIcon && (
        <span
          className={`absolute bottom-0 left-0 top-0 flex items-center justify-center ${iconSizeClass[fieldSize]}`}
        >
          <BaseIcon icon={iconName} />
        </span>
      )}
      <input
        type={type}
        className={`border border-gray-300 leading-none ${sizeClass[fieldSize]} ${className}`}
        {...props}
      />
    </div>
  );
};

export default BaseInput;
