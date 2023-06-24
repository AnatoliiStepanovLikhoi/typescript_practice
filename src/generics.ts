let array2: (string | number)[];

array2 = ["max", 1];

const promise: Promise<string> = new Promise((resolve) => resolve("String"));

promise.then((data) => {});

(() => {
  async function promiseFoo(): Promise<string> {
    return "String2";
  }

  promiseFoo().then((data) => {});
})();

//Generic function

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const toMerge1 = {
  name: "Max",
};

const toMerge2 = {
  age: 21,
};

const merged = merge(toMerge1, toMerge2);

merged.name;

interface ILength {
  lenght: number;
}

function getLength<T extends ILength>(str: T): number {
  return str.lenght;
}

const obj5 = {
  lenght: 10,
};

console.log(getLength(obj5));

//keyof

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const field = extractValue({ name: "Anton" }, "name");
