/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./customCardView.module.scss";
const CustomCardView = memo(function CustomCardView(props) {
  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["card"]}>
          <button></button>
        </div>
      </div>
    </div>
  );
});

CustomCardView.propTypes = {};

export default CustomCardView;
