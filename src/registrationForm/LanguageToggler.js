import { useContext } from "react";
import { useTranslation } from "react-i18next";
import {Context} from "./Wrapper";
const LanguageToggler = () => {
  const langContext=useContext(Context)
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="footer">
      <button  onClick={()=>langContext.changeLocale('en')} value="en">
        en
      </button>
      <button onClick={()=>langContext.changeLocale('ar')} value="ar">
        ar
      </button>
    </div>
  );
};
export default LanguageToggler;
