const a = JSON.parse("{a: 1}");

if (typeof a === "object" && a != null && "a" in a) {
  a.a;
}

//

function parse(a: unknown) {
  if (Array.isArray(a)) {
    console.log(a);
  }
}

//

const roles = ["admin", "user", "moderator"] as const;

roles.includes("bffbfb");

//

const arr111 = [1, 3, 5, undefined];

const newArr = arr111.filter(Boolean);

const newArr2 = arr111.filter((e): e is number => {
  return !!e;
});
