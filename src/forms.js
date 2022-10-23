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

  function handleFormChange(evt) {
    setFormState({
      ...formState,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleFormSubmit() {
    const info = { ...formState };
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
    const body = JSON.stringify(salesperson);

    var response = fetch("http://localhost:3001/salesperson", {
      method: "PUT",
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
        <button onClick={handleFormSubmit}>Add</button>
      </div>
    </div>
  );
};
