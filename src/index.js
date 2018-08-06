import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import Entry from "./app";
import { CookiesProvider } from 'react-cookie';

const element = document.querySelector("#entry");

ReactDOM.render(<CookiesProvider><Entry /></CookiesProvider>, element);
