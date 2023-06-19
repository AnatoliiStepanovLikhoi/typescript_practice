const arr: number[] = [123];
const matrix: number[][] = [[], [3]];
const arr2: (number | string)[] = [123, "123"];

arr.map((item) => item + 1);

//tuples

const coordinates: [number, number] = [60.12312, 60.123456];

// coordinates.push(123);

let fixed: [string, number];
fixed = ["str", 1];
fixed.push("new");
fixed.pop();
