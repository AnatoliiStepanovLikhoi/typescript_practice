//Any

let test: any = 123;

test = "124";

test.map();

//Unknown

let test2: unknown = 1231;

let string123: string = test;

//void

function f(arg: string, next: string): void {
  // return 1;
}

const f2 = (arg: string, next: string): void => {
  // return 1
};
