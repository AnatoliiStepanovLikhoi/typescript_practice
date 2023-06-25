// const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });

//Simple types
let num: number;
num = 10;
num = -10;
num = 10.1;

let str: string;
str = "string";
// str = null

let bool: boolean;
let person = "Max";
// person = 1

//Complicated types
let array: string[] = [];
array = ["string"];

let arrayNum: number[] = [];
arrayNum = [1, 2, 3];

let arrayAny: any[] = [];
arrayAny = [1, 2, 3, "bool"];

let arrObj: { name: string }[];
arrObj = [{ name: "Alex" }, { name: "Nikita" }];

//Objects
let object: { name: string };
object = { name: "Alex" };
object.name;

let db: {
  id: number;
  title: string;
  info?: {
    date: Date;
    isNew: boolean;
  };
};

db = {
  id: 1,
  title: "New product",
  info: {
    date: new Date(),
    isNew: true,
  },
};

//

const fruit: string[] = [];

function workWithArr(arr: string[], value: string, action: "add" | "delete") {
  if (action === "add") {
    arr.push(value);
  } else {
    const index = arr.indexOf(value);

    arr.splice(index, 1);
  }

  return arr;
}

workWithArr(fruit, "Banana", "add");
workWithArr(fruit, "Melon", "add");
workWithArr(fruit, "Pear", "add");
workWithArr(fruit, "Bear", "add");

workWithArr(fruit, "Pear", "delete");

console.log(fruit);

//

function calc(
  num1: number,
  num2: number,
  callback: (arg1: number, arg2: number) => number
) {
  return callback(num1, num2);
}

function foo2(num1: number, num2: number) {
  return num1 + num2;
}

const result2 = calc(1, 3, foo2);

// console.log(result2);
