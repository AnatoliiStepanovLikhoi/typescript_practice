type Admin = {
  name: string;
  privileges: string[];
};

type User1 = {
  name: string;
  startDate: Date;
};

type AdminUser = Admin & User;

// const user2: AdminUser = {
// }

interface Admin1 {
  name: string;
  privileges: string[];
}

interface User3 {
  name: string;
  startDate: Date;
}
// interface AdminUser2 extends Admin, User {}

type AdminOrUser = Admin | User;

function showFields(el: AdminOrUser) {
  if ("startDate" in el) {
    console.log(el.startDate);
  }

  if ("privileges" in el) {
    console.log(el.privileges);
  }

  console.log(el.name);
}

//Type Guards

type ComplexType = string | number;

function combineNums(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

//Guards in classes
abstract class Guy {
  constructor(public name: string) {}
}

class Good extends Guy {
  advise() {
    console.log("advise");
  }
}

class Bad extends Guy {
  insult() {
    console.log("insult");
  }
}

const good = new Good("John");
const bad = new Good("Sergey");

function guys(user: Guy) {
  if (user instanceof Good) {
    user.advise();
  }

  if (user instanceof Bad) {
    user.insult();
  }
}

//Type casting

const input = document.getElementById("inputEmail") as HTMLInputElement;

if (input) {
  const newInput = input;
  newInput.value;
}

//NUllish coalescing

const userInput = null;

const store = userInput ?? "Default";

console.log(store);

//Function overload

function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}
