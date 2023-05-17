export type UnionSubType<T, U extends T> = U;

export type SizeOptions = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// temp user type for testing
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};
