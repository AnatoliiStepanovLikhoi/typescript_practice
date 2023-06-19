//Any

let test: any = 123;
test = "124";
test.map();

let some: any;
some = "string";
some = 1;
some = { name: "Alex" };
some.name;

//Unknown

let test2: unknown = 1231;
let string123: string = test;

let something: unknown;

something = 10;
something = "string";

let string2: string;
if (typeof something === "string") string2 = something;

//void

function f(arg: string, next: string): void {
  // return 1;
}

const f2 = (arg: string, next: string): void => {
  // return 1
};

//Function type

let foo: (param1: number, param2: string) => void;

foo = (param1: number, param2: string) => {
  console.log("Some text");
};

// function calc(
//   num1: number,
//   num2: number,
//   callback: (arg1: number, arg2: number) => number
// ) {
//   return callback(num1, num2);
// }

// function foo2(num1: number, num2: number) {
//   return num1 + num2;
// }

// const result = calc(1, 3, foo2);

// console.log(result);
