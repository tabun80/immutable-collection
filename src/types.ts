export type CollectionItemType = {
  [key: string]: any;
};

type ArrayType<T extends unknown[]> = T extends (infer U)[] ? U : never;

export type Immutable<T> = T extends unknown[]
  ? readonly Immutable<ArrayType<T>>[]
  : { readonly [K in keyof T]: Immutable<T[K]> };
