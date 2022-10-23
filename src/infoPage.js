import React, { useState, useMemo, useEffect } from "react";
import { useTable } from "react-table";
import {
  productListColumns,
  salespersonListColumns,
  customerListColumns,
  saleListColumns,
} from "./columns.js";
import { SalespersonForm } from "./forms.js";

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
  const [data, setData] = useState(null);
  useEffect(() => {
    let response = fetch("http://localhost:3001/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "API-Key": "secret",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // console.log(data);

  var productList = data?.productList ?? [];
  var salespersonList = data?.salespersonList ?? [];
  var customerList = data?.customerList ?? [];
  var saleList = data?.saleList ?? [];

  // function updateSalesperson() {
  //   const info = {...updateSalespersonState};
  //   const salesperson = {
  //     firstName: info.firstName,
  //     lastName: info.lastName,
  //     address: info.address,
  //     phone: info.phone,
  //     startDate: info.startDate,
  //     endDate: info.endDate,
  //     manager: info.manager,
  //   };
  //   // Sends info to middle tier, and then fetches the list of salespersons again
  //   // Something like dispatch(PUT, middleTier, info)
  //   setExampleSalespersonList([
  //     ...exampleSalespersonList,
  //     salesperson,
  //   ]);
  //   // console.log(exampleSalespersonList);
  // };

  // const [updateSalespersonState, setUpdateSalespersonState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   phone: "",
  //   startDate: "",
  //   endDate: "",
  //   manager: "",
  // });
  // function handleSalespersonChange(evt) {
  //   setUpdateSalespersonState({
  //     ...updateSalespersonState,
  //     [evt.target.name]: evt.target.value,
  //   });
  //   // console.log(updateSalespersonState);
  // }

  const [formState, setFormState] = useState({
    salesperson: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      startDate: "",
      endDate: "",
      manager: "",
    },
    product: {
      name: "",
      manufacturer: "",
      style: "",
      purchasePrice: "",
      salePrice: "",
      qty: 0,
      // commission percent
      commission: 0,
    },
    customer: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      startDate: "",
    },
    sale: {
      product: "",
      customer: "",
      date: "",
      price: "",
      salesperson: "",
      // commission amount
      commission: 0,
    },
  });
  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }

  // console.log(formState);

  return (
    <>
      <SalespersonForm></SalespersonForm>
      <br />
      <Table columns={salespersonListColumns} data={salespersonList} />
      <br />
      <Table columns={productListColumns} data={productList} />
      <br />
      <Table columns={customerListColumns} data={customerList} />
      <br />
      <Table columns={saleListColumns} data={saleList} />
    </>
  );
};

export default InfoPage;
