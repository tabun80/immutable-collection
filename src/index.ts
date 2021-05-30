import { CollectionItemType } from './types';
import { deepFreeze } from './utils';

export type Collection<T extends CollectionItemType> = CollectionClass<T>;
class CollectionClass<T extends Object> {
  #items: readonly T[];

  constructor(items: T[]) {
    this.#items = [...items];
    deepFreeze(this);
  }

  *[Symbol.iterator]() {
    let index;
    for (index in this.#items) {
      yield this.#items[index];
    }
  }

  get length() {
    return this.#items.length;
  }

  toJson() {
    return [...this];
  }

  map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U) {
    const result = this.#items.map(callbackfn);

    return new Collection<U>(result);
  }

  filter(predicate: (value: T, index: number, array: readonly T[]) => unknown) {
    const result = this.#items.filter(predicate);

    return new Collection<T>(result as T[]);
  }
}

export const Collection: new <T extends CollectionItemType>(
  items: T[]
) => Collection<T> = CollectionClass as any;
