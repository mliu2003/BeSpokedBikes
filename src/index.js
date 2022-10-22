import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import InfoPage from './infoPage';
import MiddleTier from './middleTier'

// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InfoPage />
  </React.StrictMode>
);
