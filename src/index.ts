export class Collection<T extends {}> {
  #items: readonly T[];

  constructor(items: T[]) {
    this.#items = items;
  }
}
