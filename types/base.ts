export type UnionSubType<T, U extends T> = U;

export type FieldSize = 'base' | 'md' | 'sm' | 'lg';

export type FieldSizeClassList = {
  [key in FieldSize]: string;
};
