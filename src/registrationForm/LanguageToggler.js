import { useContext } from "react";
import { Context } from "./Wrapper";
const LanguageToggler = () => {
  const langContext = useContext(Context);
const lang=langContext.usersLocale
  
  return (
    <div className="footer">
      <button
        className={lang == "en" ? "langButtonsActive" : "langButtons"}
        onClick={() => langContext.changeLocale("en")}
        value="en"
      >
        en
      </button>
      <button
        className={lang == "ar" ? "langButtonsActive" : "langButtons"}
        onClick={() => langContext.changeLocale("ar")}
        value="ar"
      >
        ar
      </button>
    </div>
  );
};
export default LanguageToggler;
