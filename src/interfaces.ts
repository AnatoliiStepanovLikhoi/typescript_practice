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
