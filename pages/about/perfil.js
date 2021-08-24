/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import CustomProfile from "../../src/components/CustomProfile/CustomProfile";

const perfil = () => {
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
      <CustomProfile />
    </div>
  );
};

perfil.propTypes = {};

export default perfil;
