export type UnionSubType<T, U extends T> = U;

export type ColumnOptions = 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12;

export type SizeOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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

export type NavItem = {
  name: string;
  label: string;
  path: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  instagram: string;
  facebook: string;
  twitter: string;
  pinterest: string;
};

export type SiteConfig = {
  contactInfo: ContactInfo;
  nav: NavItem[];
};

export type Svg = {
  viewBox: string;
  content: string;
};
