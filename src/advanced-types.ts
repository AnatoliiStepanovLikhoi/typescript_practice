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
