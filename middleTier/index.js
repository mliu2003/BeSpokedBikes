import fs from "fs";
import express from "express";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/data", (req, res) => {
  const loadJSON = (path) =>
    JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON("../data/data.json");
  const json = JSON.parse(JSON.stringify(data));
  json["saleList"].forEach((sale) => {
    sale.product = json["productList"][sale.product].name;
    sale.customer =
      "" +
      json["customerList"][sale.customer].firstName +
      " " +
      json["customerList"][sale.customer].lastName;
    sale.salesperson =
      "" +
      json["salespersonList"][sale.salesperson].firstName +
      " " +
      json["salespersonList"][sale.salesperson].lastName;
  });
  res.json({ message: json });
});

app.put("/salesperson", (req, res) => {
  const loadJSON = (path) =>
    JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON("../data/data.json");
  const json = JSON.parse(JSON.stringify(data));
  // This is incredibly inefficient, but could be easily fixed with SQL/a real db
  var done = false;
  json["salespersonList"].forEach((salesperson) => {
    if (
      !done &&
      salesperson.firstName === req.body.firstName &&
      salesperson.lastName === req.body.lastName
    ) {
      req.body.address !== "" ? (salesperson.address = req.body.address) : null;
      req.body.phone !== "" ? (salesperson.phone = req.body.phone) : null;
      req.body.startDate !== ""
        ? (salesperson.startDate = req.body.startDate)
        : null;
      req.body.endDate !== "" ? (salesperson.endDate = req.body.endDate) : null;
      req.body.manager !== "" ? (salesperson.manager = req.body.manager) : null;
      done = true;
    }
  });
  if (!done) {
    if (req.body.firstName === "" || req.body.lastName === "") {
      res.json({ message: "Name cannot be empty." });
    } else {
      const salespersonId = Object.keys(json["salespersonList"]).length;
      const salesperson = {
        id: salespersonId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        manager: req.body.manager,
        // To keep track of total commissions
        commission: 0,
      };
      json["salespersonList"].push(JSON.parse(JSON.stringify(salesperson)));
      fs.writeFile("data/data.json", JSON.stringify(json), (err) => {
        if (err) {
          console.log(err);
        }
      });
      res.json({ message: "success" });
    }
  } else {
    fs.writeFile("data/data.json", JSON.stringify(json), (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.json({ message: "success" });
  }
});

app.put("/product", (req, res) => {
  const loadJSON = (path) =>
    JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON("../data/data.json");
  const json = JSON.parse(JSON.stringify(data));
  // As mentioned above, this is incredibly inefficient, but could be easily fixed with SQL/a real db
  var done = false;
  json["productList"].forEach((product) => {
    // There's no specifications as to what makes a product unique.
    // I decided a product was not unique if it shared:
    // name, manufacturer, and style with another product.
    // Additionally, I assume sale price to mean without discount, and purchase price to mean with discount.
    if (
      !done &&
      product.name === req.body.name &&
      product.manufacturer === req.body.manufacturer &&
      product.style === req.body.style
    ) {
      let purchasePrice = req.body.salePrice;
      json["discountList"].forEach((discount) => {
        if (discount.product == product.id) {
          purchasePrice = Math.floor(
            (purchasePrice * (100 - discount.percentageSaved)) / 100
          );
        }
      });
      req.body.purchasePrice !== -1
        ? (product.purchasePrice = purchasePrice)
        : null;
      req.body.salePrice !== -1
        ? (product.salePrice = req.body.salePrice)
        : null;
      req.body.qty !== -1 ? (product.qty = req.body.qty) : null;
      req.body.commission !== -1
        ? (product.commission = req.body.commission)
        : null;
      done = true;
    }
  });
  if (!done) {
    if (req.body.name === "") {
      res.json({ message: "Product cannot be empty." });
    } else if (req.body.manufacturer === "") {
      res.json({ message: "Manufacturer cannot be empty." });
    } else if (req.body.style === "") {
      res.json({ message: "Style cannot be empty." });
    } else if (req.body.salePrice === -1) {
      res.json({ message: "Sale Price cannot be empty." });
    } else if (req.body.qty === -1) {
      res.json({ message: "Quantity cannot be empty." });
    } else if (req.body.commission === -1) {
      res.json({ message: "Commission (%) cannot be empty." });
    } else {
      const productId = Object.keys(json["productList"]).length;
      const product = {
        id: productId,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        style: req.body.style,
        purchasePrice: req.body.salePrice, // No existing discounts yet
        salePrice: req.body.salePrice,
        qty: req.body.qty,
        commission: req.body.commission,
      };
      json["productList"].push(JSON.parse(JSON.stringify(product)));
      fs.writeFile("data/data.json", JSON.stringify(json), (err) => {
        if (err) {
          console.log(err);
        }
      });
      res.json({ message: "success" });
    }
  } else {
    fs.writeFile("data/data.json", JSON.stringify(json), (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.json({ message: "success" });
  }
});

app.post("/customer", (req, res) => {
  const loadJSON = (path) =>
    JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON("../data/data.json");
  const json = JSON.parse(JSON.stringify(data));
  json["customerList"].push(req.body);
  // console.log(json);
  fs.writeFile("data/data.json", JSON.stringify(json), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.post("/sale", (req, res) => {
  const loadJSON = (path) =>
    JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON("../data/data.json");
  const json = JSON.parse(JSON.stringify(data));
  // The worst of them all. Again, really ugly and inefficient code.
  let productId = -1;
  json["productList"].forEach((product) => {
    if (
      productId === -1 &&
      product.name === req.body.product &&
      product.manufacturer === req.body.manufacturer &&
      product.style === req.body.style
    ) {
      productId = product.id;
    }
  });
  let salespersonId = -1;
  json["salespersonList"].forEach((salesperson) => {
    if (
      salespersonId === -1 &&
      salesperson.firstName === req.body.salespersonFirst &&
      salesperson.lastName === req.body.salespersonLast
    ) {
      salespersonId = salesperson.id;
    }
  });
  if (productId === -1) {
    res.json({ message: "Product does not exist." });
  } else if (salespersonId === -1) {
    res.json({ message: "Salesperson does not exist." });
  } else {
    const customerId = Object.keys(json["customerList"]).length;
    const customer = {
      id: customerId,
      firstName: req.body.customerFirst,
      lastName: req.body.customerLast,
      address: "N/A",
      phone: "N/A",
      startDate: req.body.date,
    };
    json["customerList"].push(JSON.parse(JSON.stringify(customer)));
    const commission = Math.floor(
      (json["productList"][productId].commission *
        json["productList"][productId].purchasePrice) /
        100
    );
    const sale = {
      product: productId,
      salesperson: salespersonId,
      customer: customerId,
      date: req.body.date,
      price: json["productList"][productId].salePrice,
      commission: commission,
    };
    json["salespersonList"][salespersonId].commission += commission;
    json["saleList"].push(JSON.parse(JSON.stringify(sale)));
    fs.writeFile("data/data.json", JSON.stringify(json), (err) => {
      if (err) {
        console.log(err);
      }
    });
    res.json({ message: "success" });
  }
});

app.get("/commission", (req, res) => {
  const loadJSON = (path) =>
    JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON("../data/data.json");
  const json = JSON.parse(JSON.stringify(data));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
