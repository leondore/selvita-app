import type { ButtonHTMLAttributes, FC } from 'react';
import type { FormElemSize, FormElemSizeClassList } from '@/types/forms';
import BaseIcon, { type Icons } from '@/components/ui/BaseIcon';

type ButtonIntent = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type IntentClassList = {
  [key in ButtonIntent]: string;
};
interface ClassList {
  intent: IntentClassList;
  size: FormElemSizeClassList;
  iconSize: FormElemSizeClassList;
  iconColor: IntentClassList;
}

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: ButtonIntent;
  size?: FormElemSize;
  icon?: Icons;
}

const BaseButton: FC<BaseButtonProps> = ({
  children,
  icon,
  type = 'button',
  intent = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const buttonClassList: ClassList = {
    intent: {
      primary:
        'bg-primary text-white border-primary hover:bg-primary-interact hover:border-primary-interact focus:bg-primary-interact focus:border-primary-interact',
      secondary:
        'bg-secondary text-white border-secondary hover:bg-secondary-interact focus:bg-secondary-interact hover:border-secondary-interact focus:border-secondary-interact',
      success:
        'bg-success text-white border-success hover:bg-success-interact focus:bg-success-interact hover:border-success-interact focus:border-success-interact',
      warning:
        'bg-warning text-gray-800 border-warning hover:bg-warning-interact focus:bg-warning-interact hover:border-warning-interact focus:border-warning-interact',
      danger:
        'bg-danger text-white border-danger hover:bg-danger-interact focus:bg-danger-interact hover:border-danger-interact focus:border-danger-interact',
    },
    size: {
      sm: !!icon
        ? 'text-sm pr-5 pl-14 py-2 rounded h-9'
        : 'text-sm px-5 py-2 border-l-6 rounded h-9',
      xs: !!icon
        ? 'text-xs pr-3 pl-12 py-2 rounded h-8'
        : 'text-xs px-3 py-2 border-l-4 rounded h-8',
      md: !!icon
        ? 'text-sm pr-8 pl-16 py-3 rounded-md h-11'
        : 'text-sm px-8 py-3 border-l-6 rounded-md h-11',
      lg: !!icon
        ? 'text-sm pr-9 pl-17 py-4 rounded-md h-13'
        : 'text-sm px-9 py-4 border-l-6 rounded-md h-13',
    },
    iconSize: {
      sm: 'text-lg w-10',
      xs: 'text-base w-9',
      md: 'text-xl w-11',
      lg: 'text-xl w-12',
    },
    iconColor: {
      primary: 'bg-primary-interact text-white',
      secondary: 'bg-secondary-interact text-white',
      success: 'bg-success-interact text-white',
      warning: 'bg-warning-interact text-neutral-800',
      danger: 'bg-danger-interact text-white',
    },
  };
  const {
    intent: intentClass,
    size: sizeClass,
    iconSize: iconSizeClass,
    iconColor: iconColorClass,
  } = buttonClassList;

  return (
    <button
      type={type}
      className={`relative overflow-hidden text-ellipsis whitespace-nowrap font-medium transition-all duration-200 ease-in-out  ${
        !icon ? 'border-l-overlay-link' : ''
      } ${intentClass[intent]} ${sizeClass[size]} ${className}`}
      {...props}
    >
      {!!icon && (
        <span
          className={`absolute bottom-1 left-1 top-1 flex items-center justify-center rounded ${iconSizeClass[size]} ${iconColorClass[intent]}`}
        >
          <BaseIcon icon={icon} />
        </span>
      )}
      {children}
    </button>
  );
};

export default BaseButton;
