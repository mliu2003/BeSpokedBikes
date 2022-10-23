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
import bike from "./bespokedBikes.png";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

const InfoPage = () => {
  const state = useSelector((state) => state);
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
      <div className="defaultPageStyle">
        <img src={bike}></img>
        <h1>BeSpoked Bikes</h1>
      </div>

      <div className="bigCard">
        <h2 className="defaultPageStyle">Salespeople</h2>
        <div className="inCard">
          <SalespersonForm></SalespersonForm>
          <Table columns={salespersonListColumns} data={salespersonList} />
        </div>
        <br />
      </div>
      <br />
      <div className="bigCard">
        <h2 className="defaultPageStyle">Products</h2>
        <div className="inCard">
          <ProductForm></ProductForm>
          <Table columns={productListColumns} data={productList} />
        </div>
        <br />
      </div>
      <br />
      <div className="bigCard">
        <h2 className="defaultPageStyle">Customers</h2>
        <div className="inCard">
          <CustomerForm></CustomerForm>
          <Table columns={customerListColumns} data={customerList} />
        </div>
        <br />
      </div>
      <br />
      <div className="bigCard">
        <h2 className="defaultPageStyle">Sales</h2>
        <div className="inCard">
          <SaleForm></SaleForm>
          <Table columns={saleListColumns} data={saleList} />
        </div>
        <br />
      </div>
      <br />
    </>
  );
};

export default InfoPage;
