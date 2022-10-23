// Please see the README file if you have not already. It explains the reasoning behind some key decisions/flaws.

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
import Table from "./components.js";
import { useDispatch, useSelector } from "react-redux";

const InfoPage = () => {
  const state = useSelector((state) => (state));
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
  }, [state.render]);

  var productList = data?.productList ?? [];
  var salespersonList = data?.salespersonList ?? [];
  var customerList = data?.customerList ?? [];
  var saleList = data?.saleList ?? [];

  const [commissionReport, setCommissionReport] = useState();
  useEffect(() => {
    let response = fetch("http://localhost:3001/commission", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "API-Key": "secret",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setCommissionReport(data.message);
      });
  }, []);

  return (
    <>
      <SalespersonForm></SalespersonForm>
      <Table columns={salespersonListColumns} data={salespersonList} />
      <br />
      <ProductForm></ProductForm>
      <Table columns={productListColumns} data={productList} />
      <br />
      <CustomerForm></CustomerForm>
      <Table columns={customerListColumns} data={customerList} />
      <br />
      <SaleForm></SaleForm>
      <Table columns={saleListColumns} data={saleList} />
      <br />
    </>
  );
};

export default InfoPage;
