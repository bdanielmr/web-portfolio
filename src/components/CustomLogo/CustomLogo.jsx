/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import clasess from "./customLogo.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
const CustomLogo = ({ introText = "Bdaniel", endingText = "Mr" }) => {
  const router = useRouter();
  const { t } = useTranslation()
  return (
    <>
      <div
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
        className={clasess.logoRimacBody}
      >
        <div>
          <div className={clasess["logo-intro-text"]}>{t("home.name_logo")}<a>Mr</a></div>
        </div>
      </div>
    </>
  );
};

CustomLogo.propTypes = {};

export default CustomLogo;
