/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./customModal.module.scss";
const CustomModal = ({ close }) => {
  return (
    <div className={styles["custom-modal"]}>
      <div className={styles["custom-modal-body"]}>
        <div className={styles["custom-modal-body-container"]}>
          <div className={styles["custom-modal-body-container-close"]}>
            <p
              onClick={close}
              className={styles["custom-modal-body-container-p"]}
            >
              x
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomModal.propTypes = {};

export default CustomModal;
