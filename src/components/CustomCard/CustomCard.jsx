/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./customCard.module.scss";
import CustomModal from "../CustomModal/CustomModal";
const CustomCard = ({
  imageBackground = "",
  title = "",
  description = "",
  tec = ["React"],
  link = "",
}) => {
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
    <>
      {/**
       * MODAL OPTION
    showModal && <CustomModal close={handleCloseModal} />
  
      */}
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        style={putStylesVar()}
        className={styles["movie_card"]}
        id="bright"
      >
        <div className={styles["info_section"]}>
          <div className={styles["info_section-container"]}>
            <p>{title}</p>
            <div className={styles["info_section-container-description"]}>
              <p>{description}</p>
              <label>
                {tec?.map((tecno, intex) => {
                  return <p key={intex}>{tecno}</p>;
                })}
              </label>
            </div>
          </div>
        </div>
        <div className={`${styles.blur_back + " " + styles.bright_back}`}></div>
        <button></button>
      </a>
    </>
  );
};

CustomCard.propTypes = {};

export default CustomCard;
