/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import clasess from "./customLogo.module.scss";
import { useRouter } from "next/router";
const CustomLogo = ({ introText = "Bdaniel", endingText = "Mr" }) => {
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => router.push("/")}
        style={{ cursor: "pointer" }}
        className={clasess.logoRimacBody}
      >
        <div>
          <p className={clasess["logo-intro-text"]}>
            {introText}
            <a className={clasess["logo-ending-text"]}>{endingText}</a>
          </p>
        </div>
      </div>
    </>
  );
};

CustomLogo.propTypes = {};

export default CustomLogo;
