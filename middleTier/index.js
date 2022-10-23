import fs from "fs";
import express from 'express';




const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/data", (req, res) => {
  const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON('../data/data.json');
  res.json({ message: data})
})

app.put("/salesperson", (req, res) => {
  const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON('../data/data.json');
  const json = JSON.parse(JSON.stringify(data));
  // Check req.body.firstName + req.body.lastName to see if need to update
  json['salespersonList'].push(req.body);
  // console.log(json);
  fs.writeFile('data/data.json', JSON.stringify(json), (err) => { 
    if (err) { 
      console.log(err); 
    }});
})

app.put("/product", (req, res) => {
  const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON('../data/data.json');
  const json = JSON.parse(JSON.stringify(data));
  // Check req.body.firstName + req.body.lastName to see if need to update
  json['productList'].push(req.body);
  // console.log(json);
  fs.writeFile('data/data.json', JSON.stringify(json), (err) => { 
    if (err) { 
      console.log(err); 
    }});
})

app.post("/customer", (req, res) => {
  const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON('../data/data.json');
  const json = JSON.parse(JSON.stringify(data));
  json['customerList'].push(req.body);
  // console.log(json);
  fs.writeFile('data/data.json', JSON.stringify(json), (err) => { 
    if (err) { 
      console.log(err); 
    }});
})

app.post("/sale", (req, res) => {
  const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
  const data = loadJSON('../data/data.json');
  const json = JSON.parse(JSON.stringify(data));
  json['saleList'].push(req.body);
  // console.log(json);
  fs.writeFile('data/data.json', JSON.stringify(json), (err) => { 
    if (err) { 
      console.log(err); 
    }});
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});