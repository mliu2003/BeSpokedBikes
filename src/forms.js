import React, { useState } from "react";

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

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleFormSubmit() {
    const info = { ...formState };
    // console.log(info);
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
        console.log(data.message);
        setMsg(data.message);
      } else {
        setMsg();
      }
    });
  }

  return (
    <div>
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
          Phone (XXX-XXX-XXXX):{" "}
          <input name="phone" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Start Date (XX/XX/XXXX):{" "}
          <input name="startDate" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          End Date (XX/XX/XXXX):{" "}
          <input name="endDate" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Manager: <input name="manager" onChange={handleFormChange} />
        </label>
      </div>
      <div>
        <button onClick={handleFormSubmit}>Update</button>
        <label> </label>
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

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleFormSubmit() {
    const info = { ...formState };
    // console.log(info);
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
  }

  return (
    <div>
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
          Phone (XXX-XXX-XXXX):{" "}
          <input name="phone" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Start Date (XX/XX/XXXX):{" "}
          <input name="startDate" onChange={handleFormChange} />
        </label>
      </div>
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

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleFormSubmit() {
    const info = { ...formState };
    // console.log(info);
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
        console.log(data.message);
        setMsg(data.message);
      } else {
        setMsg();
      }
    });
  }

  return (
    <div>
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
          Style: <input name="style" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Sale Price ($):{" "}
          <input name="salePrice" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Quantity: <input name="qty" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Commission (%):{" "}
          <input name="commission" onChange={handleFormChange} />
        </label>
      </div>
      <div>
        <button onClick={handleFormSubmit}>Update</button>
        <label> </label>
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

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }
  // let error = null;
  function handleFormSubmit() {
    const info = { ...formState };
    // console.log(info);
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
    // try {
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
          console.log(data.message);
          setMsg(data.message);
        } else {
          setMsg();
        }
      });
  }

  return (
    <div>
      <div>
        <h3>Add Sale</h3>
      </div>
      <div>
        <label>
          Product: <input name="product" onChange={handleFormChange} />
          <label> </label>
          <label>
            Manufacturer:{" "}
            <input name="manufacturer" onChange={handleFormChange} />
          </label>
          <label> </label>
          <label>
            Style: <input name="style" onChange={handleFormChange} />
          </label>
        </label>
        <br />
        <label>
          Customer First Name:{" "}
          <input name="customerFirst" onChange={handleFormChange} />
        </label>
        <label> </label>
        <label>
          Last Name: <input name="customerLast" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Date (XX/XX/XXXX): <input name="date" onChange={handleFormChange} />
        </label>
        <br />
        <label>
          Salesperson First Name:{" "}
          <input name="salespersonFirst" onChange={handleFormChange} />
        </label>
        <label> </label>
        <label>
          Last Name:{" "}
          <input name="salespersonLast" onChange={handleFormChange} />
        </label>
      </div>
      <div>
        <button onClick={handleFormSubmit}>Add</button>
        <label> </label>
        {msg ? <label>Error: {msg}</label> : null}
      </div>
    </div>
  );
};
