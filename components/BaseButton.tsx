import type { ButtonHTMLAttributes, FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import BaseIcon, { type Icons } from '@/components/BaseIcon';

const button = cva('button', {
  variants: {
    intent: {
      primary:
        'bg-primary-dark text-white border-primary-dark hover:bg-primary-interact hover:border-primary-interact focus:bg-primary-interact focus:border-primary-interact',
      secondary:
        'bg-secondary text-white border-secondary hover:bg-secondary-interact focus:bg-secondary-interact hover:border-secondary-interact focus:border-secondary-interact',
      success:
        'bg-success-dark text-white border-success-dark hover:bg-success-interact focus:bg-success-interact hover:border-success-interact focus:border-success-interact',
      warning:
        'bg-warning text-gray-800 border-warning hover:bg-warning-interact focus:bg-warning-interact hover:border-warning-interact focus:border-warning-interact',
      danger:
        'bg-danger text-white border-danger hover:bg-danger-interact focus:bg-danger-interact hover:border-danger-interact focus:border-danger-interact',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

type ButtonIntent = VariantProps<typeof button>['intent'];
type IntentClassList = {
  [key in NonNullable<ButtonIntent>]: string;
};
type ButtonSize = 'base' | 'md' | 'sm';
type SizeClassList = {
  [key in ButtonSize]: string;
};

interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  size?: ButtonSize;
  icon?: Icons;
}

const BaseButton: FC<BaseButtonProps> = ({
  intent,
  size = 'base',
  children,
  className = '',
  icon,
  ...props
}) => {
  const sizeClass: SizeClassList = {
    base: !!icon
      ? 'text-sm pr-8 pl-16 py-3 rounded-md'
      : 'text-sm px-8 py-3 border-l-6 border-l-overlay-link rounded-md',
    md: !!icon
      ? 'text-sm pr-5 pl-14 py-2 rounded'
      : 'text-sm px-5 py-2 border-l-6 border-l-overlay-link rounded',
    sm: !!icon
      ? 'text-xs pr-3 pl-12 py-2 rounded'
      : 'text-xs px-3 py-2 border-l-4 border-l-overlay-link rounded',
  };

  const iconSizeClass: SizeClassList = {
    base: 'text-xl w-11',
    md: 'text-lg w-10',
    sm: 'text-base w-9',
  };

  const iconColorClass: IntentClassList = {
    primary: 'bg-primary-interact text-white',
    secondary: 'bg-secondary-interact text-white',
    success: 'bg-success-interact text-white',
    warning: 'bg-warning-interact text-neutral-800',
    danger: 'bg-danger-interact text-white',
  };

  return (
    <button
      className={`relative overflow-hidden font-medium transition-all duration-200 ease-in-out ${
        sizeClass[size]
      } ${button({
        intent,
        className,
      })}`}
      {...props}
    >
      {icon && (
        <span
          className={`absolute bottom-0 left-0 top-0 flex items-center justify-center ${
            iconSizeClass[size]
          } ${iconColorClass[intent as NonNullable<ButtonIntent>]}`}
        >
          <BaseIcon icon={icon} />
        </span>
      )}
      {children}
    </button>
  );
};

export default BaseButton;
