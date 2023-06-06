import { FormClassList } from '@/types';

export const generateClassList = (hasIcon: boolean = false): FormClassList => {
  return {
    size: {
      sm: !!hasIcon ? 'text-sm pr-5 pl-13 py-2 h-9' : 'text-sm px-5 py-2 h-9',
      xs: !!hasIcon ? 'text-xs pr-3 pl-12 py-2 h-8' : 'text-xs px-3 py-2 h-8',
      md: !!hasIcon ? 'text-sm pr-6 pl-14 py-3 h-11' : 'text-sm px-6 py-3 h-11',
      lg: !!hasIcon ? 'text-sm pr-7 pl-16 py-4 h-13' : 'text-sm px-7 py-4 h-13',
    },
    iconSize: {
      sm: 'text-sm w-9',
      xs: 'text-xs w-8',
      md: 'text-sm w-10',
      lg: 'text-base w-12',
    },
  };
};
