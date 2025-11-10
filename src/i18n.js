import i18n, { Translation } from "react-i18next";
import { initReactI18next } from "react-i18next";

const recources = {
en:{
    Translation:{
        "welcome": "welcome to react",
        
    }
},
ru:{
    Translation:{
        "welcome": "dobro pojalovat",
        
    }
},
uz:{
    Translation:{
        "welcome": "Hush kelibsiz",
        
    },
}
};

i18n.use(initReactI18next).init({
  recources,
  lng: "uz",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
export default i18n;