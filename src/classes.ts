//Classes

class House {
  private tenants: string[] = [];

  constructor(public readonly type: string, protected street: string) {}

  public showAddress(this: House): void {
    console.log("Address " + this.street);
  }

  public showType(this: House): void {
    console.log("Type " + this.type);
  }

  public addTenant(name: string) {
    this.tenants.push(name);
  }
  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chargeOfTheHouse: string;

  constructor(street: string, general: string) {
    super("stone", street);

    this.chargeOfTheHouse = general;
  }

  public showAddress(): void {
    console.log("Address " + this.street);
  }

  public showTenants() {
    console.log("general: " + this.chargeOfTheHouse);

    super.showTenants();
  }
}

const stoneHouse = new StoneHouse("stone-world", "Max");

stoneHouse.addTenant("Anton");
stoneHouse.addTenant("Nikita");

stoneHouse.showTenants();

//Static methods

class UseStatic {
  private static count = 0;

  constructor() {
    UseStatic.count += 1;
  }

  public static isStaticMethod() {
    console.log("I`m static");
  }

  public showCount() {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();

UseStatic.isStaticMethod();
