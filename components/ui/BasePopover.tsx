'use client';

import type { FormElemSize } from '@/types';
import type { Icons } from '@/components/ui/BaseIcon';
import { Fragment, type FC } from 'react';
import { Popover, Transition } from '@headlessui/react';
import BaseButton, { type ButtonIntent } from '@/components/ui/BaseButton';

interface BasePopoverProps {
  children?: React.ReactNode;
  width?: number;
  triggerText: string;
  triggerIntent?: ButtonIntent;
  triggerSize?: FormElemSize;
  triggerIcon?: Icons;
  triggerFullWidth?: boolean;
}

const BasePopover: FC<BasePopoverProps> = ({
  children,
  width,
  triggerText,
  triggerIcon,
  triggerIntent = 'primary',
  triggerSize = 'md',
  triggerFullWidth = false,
}) => {
  return (
    <Popover className="relative">
      <Popover.Button
        as={BaseButton}
        intent={triggerIntent}
        size={triggerSize}
        icon={triggerIcon}
        fullWidth={triggerFullWidth}
        className="w-full"
      >
        {triggerText}
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel
          className="absolute right-0 z-10 mt-3 w-screen max-w-full transform lg:max-w-3xl"
          style={{ minWidth: `${width}px` }}
        >
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            {children}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default BasePopover;
