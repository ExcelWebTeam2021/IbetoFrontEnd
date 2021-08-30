import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.css'

const loader = document.querySelector(".loader_container");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <App hideLoader={hideLoader} showLoader={showLoader}/>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);

reportWebVitals();
