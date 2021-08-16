/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import PropTypes from "prop-types";

const index = memo(function index(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      PAGINA contacto
    </div>
  );
});

index.propTypes = {};

export default index;
