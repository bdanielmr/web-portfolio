/* eslint-disable react/prop-types */
import React from "react";
import CustomHeader from "../src/components/CustomHeader/CustomHeader";
import i18nInit from "../src/i18n/i18n";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  i18nInit()
  return (
    <>
      <CustomHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
