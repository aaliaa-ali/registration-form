import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import ar from "./reactIntel/languages/ar.json";
import en from "./reactIntel/languages/en.json";
import Wrapper from "./registrationForm/Wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
const usersLocale = "en";
var translationsForUsersLocale;

if (usersLocale == "ar") translationsForUsersLocale = ar;
else if (usersLocale == "en") translationsForUsersLocale = en;
root.render(
  <Wrapper>
    <App />
  </Wrapper>
);
