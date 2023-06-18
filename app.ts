const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

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
