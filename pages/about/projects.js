/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import CustomWorkbook from "../../src/components/CustomWorkbook/CustomWorkbook";

const projects = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        margin: "10% 0%",
      }}
    >
      <CustomWorkbook />
    </div>
  );
};

projects.propTypes = {};

export default projects;
