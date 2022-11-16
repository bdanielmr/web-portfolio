import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { home } from "./locales";

const i18nInit = () => {
  if (i18n.isInitialized) return;

  i18n
      .use(initReactI18next)
      .init({
        resources:{
          es: { translation: home }
        },
        lng: "es",
        fallbackLng: "es",
        interpolation: { escapeValue: false }
      });
};

export default i18nInit;