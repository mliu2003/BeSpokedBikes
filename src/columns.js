export const productListColumns = [
  {
    Header: " ",
    columns: [
      {
        Header: "Product Name",
        accessor: "name",
        width: "30%",
      },
      {
        Header: "Manufacturer",
        accessor: "manufacturer",
        width: "20%",
      },
      {
        Header: "Style",
        accessor: "style",
        width: "15%",
      },
      {
        Header: "Purchase  ($)",
        accessor: "purchasePrice",
        width: "10%",
      },
      {
        Header: "Sale Price ($)",
        accessor: "salePrice",
        width: "10%",
      },
      {
        Header: "Quantity",
        accessor: "qty",
        width: "5%",
      },
      {
        Header: "Commission %",
        accessor: "commission",
        width: "10%",
      },
    ],
  },
];

export const salespersonListColumns = [
  {
    Header: " ",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
    ],
    width: "30%",
  },
  {
    Header: " ",
    columns: [
      {
        Header: "Address",
        accessor: "address",
        width: "20%",
      },
      {
        Header: "Phone",
        accessor: "phone",
        width: "10%",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
        width: "10%",
      },
      {
        Header: "Termination Date",
        accessor: "endDate",
        width: "10%",
      },
      {
        Header: "Manager",
        accessor: "manager",
        width: "20%",
      },
    ],
  },
];

export const customerListColumns = [
  {
    Header: " ",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
    ],
    width: "40%",
  },
  {
    Header: " ",
    columns: [
      {
        Header: "Address",
        accessor: "address",
        width: "30%",
      },
      {
        Header: "Phone",
        accessor: "phone",
        width: "15%",
      },
      {
        Header: "Date",
        accessor: "startDate",
        width: "15%",
      },
    ],
  },
];

export const saleListColumns = [
  {
    Header: " ",
    columns: [
      {
        Header: "Product",
        accessor: "product",
        width: "20%",
      },
      {
        Header: "Customer",
        accessor: "customer",
        width: "20%",
      },
      {
        Header: "Date",
        accessor: "date",
        width: "5%",
      },
      {
        Header: "Price ($)",
        accessor: "price",
        width: "10%",
      },
      {
        Header: "Salesperson",
        accessor: "salesperson",
        width: "20%",
      },
      {
        Header: "Commission ($)",
        accessor: "commission",
        width: "10%",
      },
    ],
  },
];

export const commissionListColumns = [
  {
    Header: " ",
    columns: [
      {
        Header: "Salesperson",
        accessor: "name",
        width: "50%",
      },
      {
        Header: "Total Commission Amount",
        accessor: "commission",
        width: "50%",
      },
    ],
  },
];
