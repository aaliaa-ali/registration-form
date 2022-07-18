import { useTranslation } from "react-i18next";

const LanguageToggler = () => {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="footer">
      <button onClick={changeLanguage} value="en">
        en
      </button>
      <button onClick={changeLanguage} value="ar">
        ar
      </button>
    </div>
  );
};
export default LanguageToggler;
