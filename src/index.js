//? components ==> views ==> App.js ==> index.js ==> Browser renders 

import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';
import { createRoot } from 'react-dom/client';

//?5/4 Needed to bring in BrowserRouter
//! Find out what this does completely!

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <App  />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
