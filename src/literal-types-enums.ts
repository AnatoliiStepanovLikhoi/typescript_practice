let Env: "development" | "staging" | "production" = "staging";

function setEnv(
  myEnv: "development" | "staging" | "production"
): "development" | "staging" | "production" {
  return myEnv;
}

//Types
type Env = "development" | "staging" | "production";

let env2: Env = "staging";

function setEnv2(myEnv: Env): Env {
  return myEnv;
}

//Union types

let union: number | string;

union = 10;
union = "string";
// union = true

function combine(param1: number | string, param2: number | string) {
  if (typeof param1 === "string" || typeof param2 === "string") {
    return param1.toString() + param2.toString();
  }
  return param1 + param2;
}

console.log(combine("str1", "str2"));

//Literal types

let active: "start" | "end";

//Enums

enum Env3 {
  Development = "development",
  Staging = "staging",
  Production = "production",
}

let env3: Env3 = Env3.Production;

function setEnv3(myEnv: Env3): Env3 {
  return myEnv;
}

setEnv3(Env3.Production);
//

enum Toggle {
  ENABLE,
  DISABLE,
}

const service = {
  status: Toggle.ENABLE,
};

if (service.status === Toggle.ENABLE) {
  console.log("it is active");
}
