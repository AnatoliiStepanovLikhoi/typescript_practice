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
