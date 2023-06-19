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
