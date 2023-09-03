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

// console.log(getLength(obj5));

//keyof

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const field = extractValue({ name: "Anton" }, "name");

//Generic classes

class DataStore<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  getItems(): T[] {
    return this.data;
  }
}

interface IUser {
  name: string;
}

const storeUsers = new DataStore<IUser>();

storeUsers.addItem({
  name: "Max",
});

storeUsers.addItem({
  name: "Anton",
});

// console.log(storeUsers.getItems());

const ageStore = new DataStore<number>();

ageStore.addItem(21);
ageStore.addItem(30);

//Utility Types
// Partial
interface IUser2 {
  name: string;
  age: number;
}

function createPerson2(name: string): IUser2 {
  const person: Partial<IUser2> = {
    name,
  };
  person.age = 21;

  return person as IUser2;
}

//Readonly

const obj6: Readonly<IUser> = {
  name: "Max",
};
// obj6.name = "";

//Pick
interface Page {
  title: string;
  annotation: string;
  numberPage: number;
}

const pageNotation: Pick<Page, "annotation" | "numberPage"> = {
  annotation: "Small page",
  numberPage: 1,
};

///

const addIdToObj = <TObj>(obj: TObj) => {
  return {
    ...obj,
    id: "123",
  };
};

const result = addIdToObj({ firstName: "Sava", lastName: "Kava" });

// console.log(result);

//!Promise return type

type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;

type Result = GetPromiseReturnType<
  () => Promise<{
    firstName: string;
    lastName: string;
  }>
>;

// type ErrorLine = GetPromiseReturnType<string>;

//!Multiple generics

const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  if (key === "bad") {
    throw Error(`don't assess bad key`);
  }
  return obj[key];
};

const result3 = getValue({ a: 1, b: "some string", c: true }, "c");

console.log(result3);

/// Generic practice

const valueFactory = (x: number) => x;
const myValue = valueFactory(11);

type TypeFactory<X> = X;
type MyType = TypeFactory<string>;

interface ValueContainer<Value> {
  value: Value;
}

type StringContainer = ValueContainer<string>;

const x: StringContainer = {
  value: "rgrgrg",
};

// class ArrayOfNumbers {
//   constructor(public collection: number[]) {}

//   get(index: number): number {
//     return this.collection[index];
//   }
// }

// class ArrayOfStrings {
//   constructor(public collection: string[]) {}

//   get(index: number): string {
//     return this.collection[index];
//   }
// }

class ArrayOfAnything<Type> {
  constructor(public collection: Type[]) {}

  get(index: number): Type {
    return this.collection[index];
  }
}

new ArrayOfAnything<number>([1, 2, 3]);
new ArrayOfAnything<string>(["1", "2", "3"]);

///

function printString(arr: string[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

function printNumber(arr: number[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
}

printAnything<number>([1, 2, 34]);

///

function fillArray<T>(length: number, el: T): T[] {
  return new Array<T>(length).fill(el);
}

const array1 = fillArray<string>(10, "*");

///

interface Array<T> {
  concat(...items: Array<T[] | T>): T[];

  reduce<U>(
    callback: (state: U, element: T, index: number, array: T[]) => U,
    firstState?: U
  ): U;
}

///

interface Lengthwise {
  length: number;
}

function printLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

printLength("1");

///

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const myNewObj = {
  a: 1,
  b: 2,
  c: 3,
};

getProperty(myNewObj, "b");
