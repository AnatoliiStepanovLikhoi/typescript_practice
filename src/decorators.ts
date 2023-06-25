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
