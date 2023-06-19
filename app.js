var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//Simple types
var num;
num = 10;
num = -10;
num = 10.1;
var str;
str = "string";
// str = null
var bool;
var person = "Max";
// person = 1
//Complicated types
var array = [];
array = ["string"];
var arrayNum = [];
arrayNum = [1, 2, 3];
var arrayAny = [];
arrayAny = [1, 2, 3, "bool"];
var arrObj;
arrObj = [{ name: "Alex" }, { name: "Nikita" }];
//Objects
var object;
object = { name: "Alex" };
object.name;
var db;
db = {
    id: 1,
    title: "New product",
    info: {
        date: new Date(),
        isNew: true,
    },
};
//
var fruit = [];
function workWithArr(arr, value, action) {
    if (action === "add") {
        arr.push(value);
    }
    else {
        var index = arr.indexOf(value);
        arr.splice(index, 1);
    }
    return arr;
}
workWithArr(fruit, "Banana", "add");
workWithArr(fruit, "Melon", "add");
workWithArr(fruit, "Pear", "add");
workWithArr(fruit, "Bear", "add");
workWithArr(fruit, "Pear", "delete");
console.log(fruit);
//
function calc(num1, num2, callback) {
    return callback(num1, num2);
}
function foo2(num1, num2) {
    return num1 + num2;
}
var result2 = calc(1, 3, foo2);
console.log(result2);
//
