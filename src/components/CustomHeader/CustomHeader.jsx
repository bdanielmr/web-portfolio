/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import classtyles from "./customHeader.module.scss";
import CustomNavbar from "./CustomNavbar";
import CustomSticky from "./CustomSticky";
import CustomLogo from "../CustomLogo/CustomLogo";
import CustomOpenMenu from "../CustomOpenMenu/CustomOpenMenu";
const CustomHeader = (props) => {
  const [modalNav, setModalNav] = useState(false);
  const handleClickExpandModalNav = () => {
    setModalNav(!modalNav);
  };
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
          <div className={classtyles["test-icon"]}>
            <a
              className={classtyles["test-body-icon"]}
              href="https://github.com/bdanielmr"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
          <div className={classtyles["test-3"]}>
            <div
              onClick={handleClickExpandModalNav}
              className={classtyles["test-body-hambuyrger"]}
            >
              <CustomOpenMenu />
            </div>
          </div>
        </div>
      }
    ></CustomSticky>
  );
};

CustomHeader.propTypes = {};

export default CustomHeader;
