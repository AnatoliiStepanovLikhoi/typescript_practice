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

function logIt(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function replacementMethod(this: any, ...args: any[]) {
    console.log(`Entered ${propertyKey}`);
    originalMethod?.apply(this, args);
  };

  return descriptor;
}
