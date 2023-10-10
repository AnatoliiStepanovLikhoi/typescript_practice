const a = JSON.parse('{"a": 1}');

if (typeof a === "object" && a !== null && "a" in a) {
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

// enums

enum UserRolesEnum {
  User,
  Admin,
  Staff,
}

if (UserRolesEnum.User) {
  console.log("this will never get hit");
}

const UserRoles = ["User", "Admin", "Staff"] as const;

type UserRole = (typeof UserRoles)[number];

type User12 = {
  role: UserRole;
};

const Dropdown = () => {
  const data = UserRoles.map((role) => ({ value: role, label: role }));
};
