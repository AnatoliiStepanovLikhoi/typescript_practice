interface UserInfo {
  phone: string;
  mail: string;
}

interface User extends UserInfo {
  readonly name: string | number;
  height?: number;
}

interface Customer {
  user: User;
  bill: number;
}

const customer: Customer = {
  user: {
    name: "Stas",
    height: 177,
    phone: "0442508250",
    mail: "ggg@mail.ua",
  },
  bill: 12345,
};

// customer.user.name = 'Vlad'

//

interface IPerson {
  readonly name: string;
  age?: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }

  private checkAge() {
    if (this.age < 28) {
      throw new Error("Pilot to young");
    }
  }

  public greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  public flyMessage(): void {
    console.log("Plane is took off, have a nice flight!");
  }
}

abstract class Plane {
  protected pilot?: IPilot;

  public sitInplane(pilot: IPilot) {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine() {
    if (!this.pilot) {
      throw new Error("No pilot in cabin");
    }

    console.log("Engine starting...");

    this.pilot.flyMessage();

    return true;
  }
}

class Terrorist implements IPilot {
  public flyMessage(): void {
    console.log("We want 9 millions or we kill all pax");
  }
}
const boeing = new Boeing();
const pilot = new Terrorist();

boeing.sitInplane(pilot);

boeing.startEngine();

// const pilot = new Pilot("Max", 32);

// pilot.greet("Capitan is greeting you, my name is ");
// boeing.sitInplane(pilot);
// boeing.startEngine();

//Interface as function

// type AddFunc = (n1: number, n2: number) => number;

interface AddFunc {
  (n1: number, n2: number): number;
}

const foo1: AddFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

//Index Props

interface Person {
  name: string;
  age: number;
  [x: string]: string | number;
}

const user4: Person = {
  name: "Max",
  age: 30,
  gender: "man",
  country: "UA",
};

//Optional chaining

interface Person2 {
  name: string;
  additionalInfo?: {
    someInfo: string;
  };
}

const user5: Person2 = {
  name: "Max",
};

// user5?.additionalInfo?.someInfo
