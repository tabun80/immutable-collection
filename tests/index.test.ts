import { Collection } from './../src';

type TestObject = {
  test: number;
};

class TestCollection extends Collection<TestObject> {}

describe('Collection class', () => {
  describe('property: length', () => {
    const mock = [{ test: 1 }, { test: 2 }, { test: 3 }];

    it('0', async () => {
      const data: TestObject[] = [];

      const collection = new TestCollection(data);
      expect(collection.length).toBe(0);
    });

    mock.forEach((_, index) => {
      it(String(index + 1), async () => {
        const collection = new TestCollection(mock.slice(0, index + 1));

        expect(collection.length).toBe(index + 1);
        expect(collection.toJson()).toMatchSnapshot();
      });
    });
  });

  describe('iterator', () => {
    const mock = [{ test: 1 }, { test: 2 }, { test: 3 }];

    it('return array', async () => {
      const collection = new TestCollection(mock);

      expect([...collection]).toMatchSnapshot();
    });
  });

  describe('method: toJson', () => {
    const mock = [{ test: 1 }, { test: 2 }, { test: 3 }];

    it('return array', async () => {
      const collection = new TestCollection(mock);

      expect(collection.toJson()).toMatchSnapshot();
    });
  });

  describe('method: map', () => {
    const mock = [{ test: 1 }, { test: 2 }, { test: 3 }];

    it('immutable', async () => {
      const collection = new TestCollection(mock);
      const result = collection.map(({ test }) => test + 1);

      expect(collection.toJson()).toMatchSnapshot();
      expect(result.toJson()).toMatchSnapshot();
    });
  });

  describe('method: filter', () => {
    const mock = [{ test: 1 }, { test: 2 }, { test: 3 }];

    it('immutable', async () => {
      const collection = new TestCollection(mock);
      const result = collection.filter(({ test }) => test === 1);

      expect(collection.toJson()).toMatchSnapshot();
      expect(result.toJson()).toMatchSnapshot();
    });
  });
});
