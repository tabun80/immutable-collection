import { deepFreeze } from './utils';
type CollectionItemType = {
  [key: string]: unknown;
};

type ArrayType<T extends unknown[]> = T extends (infer U)[] ? U : never;

type Immutable<T> = T extends unknown[]
  ? readonly Immutable<ArrayType<T>>[]
  : { readonly [K in keyof T]: Immutable<T[K]> };
type Collection<T extends CollectionItemType> = Immutable<CollectionClass<T>>;

class CollectionClass<T extends Object> {
  #items: readonly T[];

  constructor(items: T[]) {
    this.#items = items;
    deepFreeze(this);
  }

  get length() {
    return this.#items.length;
  }
}

export const Collection: new <T extends CollectionItemType>(
  items: T[]
) => Collection<T> = CollectionClass as any;
