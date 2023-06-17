class Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @logIt
  printInfo() {
    console.log(`Hi, I am - ${this.name}`);
  }
}

function logIt(originalMethod: any, context: any) {
  return function replacementMethod(this: any, ...args: any[]) {
    console.log(`Entered ${context.name}`);
    originalMethod.call(this, ...args);
  };
}
