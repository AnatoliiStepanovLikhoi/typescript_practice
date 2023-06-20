type PersonType = {
  readonly name: string;
  age?: number;

  showName: () => void;
};

const person2: PersonType = {
  name: "Vova",
  age: 30,

  showName() {
    console.log(this.name);
  },
};

const person3: PersonType = {
  name: "Alex",

  showName() {
    console.log(this.name);
  },
};
