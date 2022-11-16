import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { homeEn, homeEs } from "./translations";


const i18nInit = () => {
  if (i18n.isInitialized) return;

  i18n
      .use(initReactI18next)
      .init({
        resources:{
          en: { translation: homeEn },
          es: { translation: homeEs },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false }
      });
};

export default i18nInit;