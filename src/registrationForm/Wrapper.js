import React, { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import ar from "../reactIntel/languages/ar.json";
import en from "../reactIntel/languages/en.json";

export const Context = React.createContext();

function Wrapper(props) {
  const [usersLocale, setLocale] = useState("en");
  console.log('first', usersLocale)
  const [translationsForUsersLocale, setTranslation] = useState(en);
  function changeLocale(locale) {
    if (locale == "ar") {setTranslation(ar)
    setLocale('ar')
  }
    else if (locale == "en") {
      setTranslation(en)
      setLocale('en')
    };
  }

  return (
    <Context.Provider value={{changeLocale ,usersLocale}}>
      <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
}

export default Wrapper;
