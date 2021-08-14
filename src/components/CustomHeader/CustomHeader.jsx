/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import classtyles from "./customHeader.module.scss";
import CustomNavbar from "./CustomNavbar";
import CustomSticky from "./CustomSticky";
import CustomLogo from "../CustomLogo/CustomLogo";
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
          <div className={classtyles["test-3"]}>
            <div
              onClick={handleClickExpandModalNav}
              className={classtyles["test-body-hambuyrger"]}
            >
              {!modalNav ? (
                <label>
                  <div
                    className={classtyles["test-body-hambuyrger-item"]}
                  ></div>
                  <div
                    className={classtyles["test-body-hambuyrger-item"]}
                  ></div>
                  <div
                    className={classtyles["test-body-hambuyrger-item"]}
                  ></div>
                </label>
              ) : (
                <>
                  <label>
                    <div
                      className={classtyles["test-body-hambuyrger-item-spa"]}
                    ></div>
                    <div
                      className={classtyles["test-body-hambuyrger-item-spa"]}
                    >
                      <span id="x">X</span>
                    </div>
                  </label>
                </>
              )}
            </div>
          </div>
        </div>
      }
    ></CustomSticky>
  );
};

CustomHeader.propTypes = {};

export default CustomHeader;
