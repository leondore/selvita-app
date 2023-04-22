import type { ButtonHTMLAttributes, FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-primary-dark text-white border-primary-dark hover:bg-primary-interact hover:border-primary-interact focus:bg-primary-interact focus:border-primary-interact',
      ],
      secondary: [
        'bg-secondary text-white border-secondary hover:bg-secondary-interact focus:bg-secondary-interact hover:border-secondary-interact focus:border-secondary-interact',
      ],
      success: [
        'bg-success-dark text-white border-success-dark hover:bg-success-interact focus:bg-success-interact hover:border-success-interact focus:border-success-interact',
      ],
      warning: [
        'bg-warning text-gray-800 border-warning hover:bg-warning-interact focus:bg-warning-interact hover:border-warning-interact focus:border-warning-interact',
      ],
      danger: [
        'bg-danger text-white border-danger hover:bg-danger-interact focus:bg-danger-interact hover:border-danger-interact focus:border-danger-interact',
      ],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const BaseButton: FC<BaseButtonProps> = ({
  intent,
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`transition-all duration-200 ease-in-out ${button({
        intent,
        className,
      })}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
