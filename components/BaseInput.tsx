import type { InputHTMLAttributes, HTMLInputTypeAttribute, FC } from 'react';
import type { UnionSubType } from '@/types/base';
import type { FormClassList, FormElemProps } from '@/types/forms';
import BaseIcon, { type Icons } from '@/components/BaseIcon';
import { keyify } from '@/utils/helpers';
import { generateClassList } from '@/utils/forms';

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
    ...generateClassList(hasIcon),
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
            className={`absolute bottom-1 left-1 top-1 z-10 flex items-center justify-center rounded-l bg-secondary text-sm text-white ${iconSizeClass[fieldSize]}`}
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
