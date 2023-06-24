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
