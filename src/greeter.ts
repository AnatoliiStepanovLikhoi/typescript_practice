function greeter(person: string) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);

//Functions

function print(): void {
  console.log("some log");
}

function combine2(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("new error");
}

function createServerPerson(name: string) {
  return eval(`
    (() => {
      return {
        name: '${name}',
      };
    })()
  `);
}

function createPerson(name: string): { name: string } {
  return createServerPerson(name);
}

const person1 = createPerson("Alex");
