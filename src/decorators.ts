//Decorators

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function AddProperty() {
  return function (constructor: Function) {
    console.log("add property");
    constructor.prototype.modify = true;
  };
}

@Logger("Logging controller")
@AddProperty()
class Controller1 {
  public id = 1;
  public modify = false;
}

const controller = new Controller1();

console.log("Is modify?", controller.modify);

//complicated decorators
interface IDecoration {
  parent: string;
  template: string;
}

function ControllerDecoration(config: IDecoration) {
  return function <T extends { new (...arg: any[]): { content: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      private element: HTMLElement;
      private parent: HTMLElement;

      constructor(...args: any[]) {
        super(...args);

        this.parent = document.getElementById(config.parent)!;
        this.element = document.createElement(config.template);

        this.element.innerHTML = this.content;
        this.parent.appendChild(this.element);
      }
    };
  };
}

@ControllerDecoration({
  parent: "app",
  template: "H1",
})
class Controller {
  public content = "My controller";
}

const controller2 = new Controller();
const controller3 = new Controller();

//Methods decorators

function showParams(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
}

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value as Function;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return method.bind(this);
    },
  };
}

class Notifier {
  public content = "Message in class";

  @showParams
  @AutoBind
  showMessage() {
    console.log(this.content);
  }
}

const notifier = new Notifier();

const showMessage = notifier.showMessage;

notifier.showMessage();
showMessage();

//

function AddTax(taxPercent: number) {
  return function (_: any, _2: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value as Function;

    return {
      configurable: true,
      enumerable: false,
      get() {
        return (...args: any[]) => {
          const result = method.apply(this, args);

          return result + (result / 100) * taxPercent;
        };
      },
    };
  };
}

class Payment {
  @AddTax(20)
  pay(money: number) {
    return money;
  }
}

const payment = new Payment();

console.log(payment.pay(100));

//Parameters decorators

function CheckEmail(target: any, nameMethod: string, position: number) {
  if (!target[nameMethod].validation) {
    target[nameMethod].validation = {};
  }

  Object.assign(target[nameMethod].validation, {
    [position]: (value: string) => {
      if (value.includes("@")) {
        return value;
      }

      throw new Error("Not valid email!");
    },
  });
}

function Validation(_: any, _2: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  return {
    configurable: true,
    enumerable: false,
    get() {
      return (...args: any[]) => {
        if (method.validation) {
          args.forEach((item, index) => {
            if (method.validation[index]) {
              args[index] = method.validation[index](item);
            }
          });
        }

        return method.apply(this, args);
      };
    },
  };
}

class Person3 {
  @Validation
  setEmail(@CheckEmail email: string) {
    console.log(email);
  }
}

const person5 = new Person3();

person5.setEmail("test@test.com");

//Props decorators

interface ValidationConfig {
  [prop: string]: {
    [validationProp: string]: string[];
  };
}

const registeredValidation: ValidationConfig = {};

function Required(target: any, propName: string) {
  registeredValidation[target.constructor.name] = {
    ...registeredValidation[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidation[target.constructor.name] = {
    ...registeredValidation[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validation(obj: any) {
  const objValidation = registeredValidation[obj.constructor.name];

  if (!objValidation) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidation) {
    for (const validProp of objValidation[prop]) {
      switch (validProp) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Person {
  @Required
  public name: string;
  @PositiveNumber
  public age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const person6 = new Person("Max", -32);

if (!validation(person6)) {
  console.log("Not valid");
} else {
  console.log("Valid");
}
