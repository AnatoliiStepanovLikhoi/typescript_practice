// import axios from "axios";

// const url = "https://jsonplaceholder.typicode.com/todos/1";

// axios.get(url).then((res: any) => console.log(res.data));

interface Person123 {
  name: string;
  [key: string]: string;
}

const obj123: Person123 = {
  name: "Sara",
  surname: "White",
};

console.log(obj123["surname"]);
