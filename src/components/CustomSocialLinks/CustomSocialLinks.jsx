import React from "react";
import PropTypes from "prop-types";
import styles from "./customSocialLinks.module.scss";
const CustomSocialLinks = (props) => {
  return (
    <ul className={styles.ulContainer}>
      <li>
        <a href="#">
          <span></span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
        </a>
      </li>
      <li>
        <a href="#">
          <span></span>
        </a>
      </li>
    </ul>
  );
};

CustomSocialLinks.propTypes = {};

export default CustomSocialLinks;
