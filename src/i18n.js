import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./languages/en.json";
import uzJson from "./languages/uz.json";

const resources = {
  en: {
    translation: enJson,
  },
  uz: {
    translation: uzJson,
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "uz",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
