import fs from "fs";
import express from 'express';

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));
const data = loadJSON('../data/data.json');


console.log(data);


const PORT = process.env.PORT || 3001;

const app = express();

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

app.get("/test", (req, res) => {
  res.json({ message: data})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});