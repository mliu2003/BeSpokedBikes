import React, { useState } from "react";
import { useTable } from "react-table";
// import { Table } from "./components";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  style: {
                    width: column.width,
                    borderBottom: "3px solid black",
                  },
                })}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps({
                      style: {
                        borderBottom: "1px solid black",
                      },
                    })}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

const InfoPage = () => {
  const productListColumns = React.useMemo(
    () => [
      {
        Header: "Info",
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
            Header: "Purchase Price",
            accessor: "purchasePrice",
            width: "10%",
          },
          {
            Header: "Sale Price",
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
    ],
    []
  );

  const salespersonListColumns = React.useMemo(
    () => [
      {
        Header: "Name",
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
        Header: "Info",
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
    ],
    []
  );

  const customerListColumns = React.useMemo(
    () => [
      {
        Header: "Name",
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
        Header: "Info",
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
            Header: "Start Date",
            accessor: "startDate",
            width: "15%",
          },
        ],
      },
    ],
    []
  );

  const salesListColumns = React.useMemo(
    () => [
      {
        Header: "Info",
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
            Header: "Price",
            accessor: "price",
            width: "10%",
          },
          {
            Header: "Salesperson",
            accessor: "salesperson",
            width: "20%",
          },
          {
            Header: "Commission %",
            accessor: "commission",
            width: "10%",
          },
        ],
      },
    ],
    []
  );

  const exampleProductList = [
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
  ];

  const [exampleSalespersonList, setExampleSalespersonList] = useState([
    {
      firstName: "Nameame",
      lastName: "nanananandqwi",
      address: "aawdopqwwpq",
      phone: "10230231",
      startDate: "12/12/12",
      endDate: "12/12/12",
      manager: "mmmmmmmm",
    },
  ]);

  const exampleCustomerList = [
    {
      firstName: "N231ameame",
      lastName: "nqwdqdioja",
      address: "aawdopqwwpq",
      phone: "10230231",
      startDate: "12/12/12",
    },
  ];

  const exampleSalesList = [
    {
      product: "qpeowq", //this will link to a product in the db
      salesperson: "qwqpoew", //this will link to a salesperson in the db
      customer: "qqpwoewq", //this will link to a customer in the db
      date: "12/12/12",
      // commission and price don't actually exist in DB
      price: "120321", //from product: purchase price
      commission: "123201", //from product: commission percent & price
    },
  ];

  function updateSalesperson() {
    const info = {...updateSalespersonState};
    console.log(info);
    const salesperson = {
      firstName: info.firstName,
      lastName: info.lastName,
      address: info.address,
      phone: info.phone,
      startDate: info.startDate,
      endDate: info.endDate,
      manager: info.manager,
    };
    // Sends info to middle tier, and then fetches the list of salespersons again
    // Something like dispatch(PUT, middleTier, info)
    setExampleSalespersonList([
      ...exampleSalespersonList,
      salesperson,
    ]);
    console.log(exampleSalespersonList);
  };

  const [updateSalespersonState, setUpdateSalespersonState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    startDate: "",
    endDate: "",
    manager: "",
  });
  function handleSalespersonChange(evt) {
    setUpdateSalespersonState({
      ...updateSalespersonState,
      [evt.target.name]: evt.target.value,
    });
    // console.log(updateSalespersonState);
  }

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    console.log('hey');
    let response = fetch("http://localhost:3001/api", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': 'secret'
      }})
      .then((res) => res.json())
      .then((data) => setData(data.message));
    console.log(response);

//     var responseClone; // 1
// fetch('http://localhost:3001/api')
// .then(function (response) {
//     responseClone = response.clone(); // 2
//     return response.json();
// })
// .then(function (data) {
//     // Do something with data
// }, function (rejectionReason) { // 3
//     console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
//     responseClone.text() // 5
//     .then(function (bodyText) {
//         console.log('Received the following instead of valid JSON:', bodyText); // 6
//     });
// });
  }, []);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
      <div>
        <div>
          <label>
            First Name:{" "}
            <input name="firstName" value={updateSalesperson.firstName} onChange={handleSalespersonChange} />
          </label>
          <br />
          <label>
            Last Name:{" "}
            <input name="lastName" onChange={handleSalespersonChange} />
          </label>
          <br />
          <label>
            Address: <input name="address" onChange={handleSalespersonChange} />
          </label>
          <br />
          <label>
            Phone (XXX-XXX-XXXX):{" "}
            <input name="phone" onChange={handleSalespersonChange} />
          </label>
          <br />
          <label>
            Start Date (XX/XX/XXXX):{" "}
            <input name="startDate" onChange={handleSalespersonChange} />
          </label>
          <br />
          <label>
            End Date (XX/XX/XXXX):{" "}
            <input name="endDate" onChange={handleSalespersonChange} />
          </label>
          <br />
          <label>
            Manager: <input name="manager" onChange={handleSalespersonChange} />
          </label>
        </div>
        <div>
          <button onClick={updateSalesperson}>Add</button>
        </div>
      </div>
      <br />
      <Table columns={salespersonListColumns} data={exampleSalespersonList} />
      <br />
      <Table columns={productListColumns} data={exampleProductList} />
      <br />
      <Table columns={customerListColumns} data={exampleCustomerList} />
      <br />
      <Table columns={salesListColumns} data={exampleSalesList} />
    </>
  );
};

export default InfoPage;
