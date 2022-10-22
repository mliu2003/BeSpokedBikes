export const exampleData = {
  productList: [
    {
      name: "NameNameNameName",
      manufacturer: "Manufacturer",
      style: "Style",
      purchasePrice: "Purchase Price",
      salePrice: "Sale Price",
      qty: 0,
      commission: 0,
    },
    {
      name: "NameN",
      manufacturer: "Manufacturer",
      style: "Style",
      purchasePrice: "Purchase Price",
      salePrice: "Sale Price",
      qty: 0,
      commission: 0,
    },
    {
      name: "NameNameNameNameB",
      manufacturer: "Manufacturer",
      style: "Style",
      purchasePrice: "Purchase Price",
      salePrice: "Sale Price",
      qty: 0,
      commission: 0,
    },
  ],
  salespersonList: [
    {
      firstName: "Nameame",
      lastName: "nanananandqwi",
      address: "aawdopqwwpq",
      phone: "10230231",
      startDate: "12/12/12",
      endDate: "12/12/12",
      manager: "mmmmmmmm",
    },
  ],
  customerList: [
    {
      firstName: "N231ameame",
      lastName: "nqwdqdioja",
      address: "aawdopqwwpq",
      phone: "10230231",
      startDate: "12/12/12",
    },
  ],
  salesList: [
    {
      product: "qpeowq", //this will link to a product in the db
      salesperson: "qwqpoew", //this will link to a salesperson in the db
      customer: "qqpwoewq", //this will link to a customer in the db
      date: "12/12/12",
      // commission and price don't actually exist in DB
      price: "120321", //from product: purchase price
      commission: "123201", //from product: commission percent & price
    },
  ],
}