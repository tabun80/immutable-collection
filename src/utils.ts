export const deepFreeze = <T extends {} | any[]>(obj: T) => {
  if (isArray(obj)) {
    obj.forEach(deepFreeze);
    return Object.freeze(obj);
  }

  Object.keys(obj).forEach((prop) => {
    const key = prop as keyof T;
    if (typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {
      deepFreeze(obj[key]);
    }
  });

  return Object.freeze(obj);
};

const isArray = (obj: unknown): obj is any[] => Array.isArray(obj);
