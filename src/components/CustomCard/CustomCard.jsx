/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./customCard.module.scss";
import CustomModal from "../CustomModal/CustomModal";
const CustomCard = ({ imageBackground = "", title = "" }) => {
  const [showModal, setShowModal] = useState(false);
  const putStylesVar = () => {
    return {
      "--image-background-td": `url(${imageBackground})`,
    };
  };
  const handleClickModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {showModal && <CustomModal close={handleCloseModal} />}
      <div
        onClick={handleClickModal}
        style={putStylesVar()}
        className={styles["movie_card"]}
        id="bright"
      >
        <div className={styles["info_section"]}>{title}</div>
        <div className={`${styles.blur_back + " " + styles.bright_back}`}></div>
        <button></button>
      </div>
    </div>
  );
};

CustomCard.propTypes = {};

export default CustomCard;
