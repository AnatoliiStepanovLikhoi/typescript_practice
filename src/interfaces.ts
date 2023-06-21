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

const pilot = new Pilot("Max", 32);
const boeing = new Boeing();

pilot.greet("Capitan is greeting you, my name is ");
boeing.sitInplane(pilot);
boeing.startEngine();
