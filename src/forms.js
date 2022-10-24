import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";

export const SalespersonForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    startDate: "",
    endDate: "",
    manager: "",
  });
  const [msg, setMsg] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleFormSubmit() {
    const info = { ...formState };
    const salesperson = {
      firstName: info.firstName,
      lastName: info.lastName,
      address: info.address,
      phone: info.phone,
      startDate: info.startDate,
      endDate: info.endDate,
      manager: info.manager,
    };
    const body = JSON.stringify(salesperson);

    var response = fetch("http://localhost:3001/salesperson", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "API-Key": "secret",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message !== "success") {
          setMsg(data.message);
        } else {
          setMsg();
        }
      });
    state.render === 1 ? dispatch({ render: 0 }) : dispatch({ render: 1 });
  }

  return (
    <div className="cardStyle">
      <div>
        <h3>Update or Add Salesperson</h3>
      </div>
      <div>
        <label>
          First Name: <input name="firstName" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Last Name: <input name="lastName" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Address: <input name="address" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Phone:{" "}
          <input
            name="phone"
            placeholder="XXX-XXX-XXXX"
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>
          Start Date:{" "}
          <input
            name="startDate"
            placeholder="XX/XX/XXXX"
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>
          End Date:{" "}
          <input
            name="endDate"
            placeholder="XX/XX/XXXX"
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>
          Manager: <input name="manager" onChange={handleFormChange} />
        </label>
      </div>
      <br />
      <div>
        <button onClick={handleFormSubmit}>Update</button>
        <br />
        {msg ? <label>Error: {msg}</label> : null}
      </div>
    </div>
  );
};

export const CustomerForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    startDate: "",
  });
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleFormSubmit() {
    const info = { ...formState };
    const customer = {
      firstName: info.firstName,
      lastName: info.lastName,
      address: info.address,
      phone: info.phone,
      startDate: info.startDate,
    };
    const body = JSON.stringify(customer);

    var response = fetch("http://localhost:3001/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": "secret",
      },
      body: body,
    });
    state.render === 1 ? dispatch({ render: 0 }) : dispatch({ render: 1 });
  }

  return (
    <div className="cardStyle">
      <div>
        <h3>Add Customer</h3>
      </div>
      <div>
        <label>
          First Name: <input name="firstName" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Last Name: <input name="lastName" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Address: <input name="address" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Phone:{" "}
          <input
            name="phone"
            placeholder="XXX-XXX-XXXX"
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>
          Start Date:{" "}
          <input
            name="startDate"
            placeholder="XX/XX/XXXX"
            onChange={handleFormChange}
          />
        </label>
      </div>
      <br />
      <div>
        <button onClick={handleFormSubmit}>Add</button>
      </div>
    </div>
  );
};

export const ProductForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    manufacturer: "",
    style: "",
    salePrice: -1,
    qty: -1,
    // commission percent
    commission: -1,
  });
  const [msg, setMsg] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleFormSubmit() {
    const info = { ...formState };
    const product = {
      name: info.name,
      manufacturer: info.manufacturer,
      style: info.style,
      salePrice: info.salePrice,
      qty: info.qty,
      // commission percent
      commission: info.commission,
    };
    const body = JSON.stringify(product);

    var response = fetch("http://localhost:3001/product", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "API-Key": "secret",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message !== "success") {
          setMsg(data.message);
        } else {
          setMsg();
        }
      });
    state.render === 1 ? dispatch({ render: 0 }) : dispatch({ render: 1 });
  }

  return (
    <div className="cardStyle">
      <div>
        <h3>Update or Add Product</h3>
      </div>
      <div>
        <label>
          Product Name: <input name="name" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Manufacturer:{" "}
          <input name="manufacturer" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Style (Type): <input name="style" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Sale Price ($): <input name="salePrice" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Quantity (In stock): <input name="qty" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Commission (%):{" "}
          <input name="commission" onChange={handleFormChange} />
        </label>
      </div>
      <br />
      <div>
        <button onClick={handleFormSubmit}>Update</button>
        <br />
        {msg ? <label>Error: {msg}</label> : null}
      </div>
    </div>
  );
};

export const SaleForm = () => {
  const [formState, setFormState] = useState({
    product: "",
    customer: "",
    date: "",
    price: -1,
    salesperson: "",
    // commission amount
    commission: -1,
  });
  const [msg, setMsg] = useState();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }
  function handleFormSubmit() {
    const info = { ...formState };
    const sale = {
      product: info.product,
      manufacturer: info.manufacturer,
      style: info.style,
      customerFirst: info.customerFirst,
      customerLast: info.customerLast,
      date: info.date,
      salespersonFirst: info.salespersonFirst,
      salespersonLast: info.salespersonLast,
    };
    const body = JSON.stringify(sale);
    let response = fetch("http://localhost:3001/sale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API-Key": "secret",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message !== "success") {
          setMsg(data.message);
        } else {
          setMsg();
        }
      });
    state.render === 1 ? dispatch({ render: 0 }) : dispatch({ render: 1 });
  }

  return (
    <div className="cardStyle">
      <div>
        <h3>Add Sale</h3>
      </div>
      <div>
        <label>
          Sold Product Name:{" "}
          <input name="product" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Product Manufacturer:{" "}
          <input name="manufacturer" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Product Style (Type): <input name="style" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Customer First Name:{" "}
          <input name="customerFirst" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Customer Last Name:{" "}
          <input name="customerLast" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Date of Product Sale:{" "}
          <input
            name="date"
            placeholder="XXX-XXX-XXXX"
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>
          Salesperson First Name:{" "}
          <input name="salespersonFirst" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Salesperson Last Name:{" "}
          <input name="salespersonLast" onChange={handleFormChange} />
        </label>
      </div>
      <br />
      <div>
        <button onClick={handleFormSubmit}>Add</button>
        <label> </label>
        {msg ? <label>Error: {msg}</label> : null}
      </div>
    </div>
  );
};
