import type { UnionSubType, SizeOptions } from '@/types/base';

export type FormElemSize = UnionSubType<SizeOptions, 'xs' | 'sm' | 'md' | 'lg'>;

export type FormElemSizeClassList = {
  [key in FormElemSize]: string;
};

export interface FormClassList {
  size: FormElemSizeClassList;
  iconSize: FormElemSizeClassList;
}

export interface FormElemProps {
  name?: string;
  error?: boolean;
  fieldSize?: FormElemSize;
  hasIcon?: boolean;
  label: string;
  hideLabel?: boolean;
  background?: 'white' | 'gray';
}

export interface SelectOption {
  id: string;
  label: string;
  value: string;
  disabled?: boolean;
}
