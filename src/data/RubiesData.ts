import { productImageLinks } from "../assets/assetLinks/productImageLinks";

export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  stock: number;
};

export const products: Product[] = [
  {
    id: "SHOP_ZDG2MH8VPOF8L6YKT4RM",
    name: "Makeup",
    price: 20000,
    image: productImageLinks.makeup,
    stock: 12,
  },
  {
    id: "SHOP_XZ84QOBUL2IFCVCMTDAS",
    name: "Ladies Wear 101",
    description: "Ladies street Summer wears.",
    price: 1000,
    image: productImageLinks.ladiesWear,
    stock: 45,
  },
  {
    id: "SHOP_WUBDR6O2JJQEXPE84HYZ",
    name: "Book: Get Rich",
    description:
      "Get rich books for smart people. Get one soon and get rich quickly.",
    price: 1000,
    image: productImageLinks.getRichBook,
    stock: 30,
  },
  {
    id: "SHOP_7LGMWQDKGP0M9YU9YWWI",
    name: "Cloud Engineering Workshop",
    description: "Cloud Engineering Workshop for professionals and experts.",
    price: 100000,
    image: productImageLinks.cloudWorkshop,
    stock: 8,
  },
  {
    id: "SHOP_ROBYCRXCYEN54JRL6DQ7",
    name: "HP Precision Laptop Hipervision",
    description:
      "HP Precision Laptop Hipervision for Corporate use and Retail use.",
    price: 1200000,
    image: productImageLinks.hpLaptop,
    stock: 20,
  },
  {
    id: "SHOP_KTFS99PCRWTVIKXHDZAR",
    name: "Mathematics - JSS 2",
    description:
      "Mathematics classes for JSS 2 students in Nigeria or Year 8 in the UK",
    price: 20000,
    image: productImageLinks.math,
    stock: 25,
  },
  {
    id: "SHOP_P4TQZLW0JCWGYXJYWIKS",
    name: "Mathematics - JSS 1",
    description:
      "Mathematics classes for JSS 1 students or Year 7 students in the UK.",
    price: 10000,
    image: productImageLinks.math2,
    stock: 25,
  },
];
