import React, { useState, useMemo, useEffect } from "react";
import {
  productListColumns,
  salespersonListColumns,
  customerListColumns,
  saleListColumns,
} from "./columns.js";
import {
  SalespersonForm,
  ProductForm,
  CustomerForm,
  SaleForm,
} from "./forms.js";
import Table from "./components.js"

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

  var productList = data?.productList ?? [];
  var salespersonList = data?.salespersonList ?? [];
  var customerList = data?.customerList ?? [];
  var saleList = data?.saleList ?? [];

  return (
    <>
      <SalespersonForm></SalespersonForm>
      <ProductForm></ProductForm>
      <CustomerForm></CustomerForm>
      <SaleForm></SaleForm>
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
