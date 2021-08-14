/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styles from "./customCard.module.scss";
const CustomCard = ({ imageBackground = "" }) => {
  const putStylesVar = () => {
    return {
      "--image-background-td": `url(${imageBackground})`,
    };
  };
  return (
    <div style={putStylesVar()} className={styles["movie_card"]} id="bright">
      <div className={styles["info_section"]}></div>
      <div className={`${styles.blur_back + " " + styles.bright_back}`}></div>
    </div>
  );
};

CustomCard.propTypes = {};

export default CustomCard;
