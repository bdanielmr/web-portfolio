/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import classtyles from "./customHeader.module.scss";
import CustomNavbar from "./CustomNavbar";
import CustomSticky from "./CustomSticky";
import CustomLogo from "../CustomLogo/CustomLogo";
const CustomHeader = (props) => {
  return (
    <CustomSticky
      top={45}
      child={
        <div className={classtyles["custom-header"]}>
          <div className={classtyles["test-1"]}>
            <CustomLogo />
          </div>
          <div className={classtyles["test-hide"]}>
            <CustomNavbar />
          </div>
          <div className={classtyles["test-3"]}>
            <a>submenu</a>
          </div>
        </div>
      }
    ></CustomSticky>
  );
};

CustomHeader.propTypes = {};

export default CustomHeader;
