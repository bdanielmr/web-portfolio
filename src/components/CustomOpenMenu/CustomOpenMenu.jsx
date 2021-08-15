/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./customOpenMenu.module.scss";
const CustomOpenMenu = (props) => {
  return (
    <label className={styles.labelMenuOpen}>
      <input className={styles.inputMenuOpen} type="checkbox" />
      <span className={styles.menu}>
        <span className={styles.hamburger}></span>
      </span>
      <ul className={styles.ulMenuOpen}>
        <li>
          <a className={styles.aMenuOpen} href="#">
            Sobre mi
          </a>
        </li>
        <li>
          <a className={styles.aMenuOpen} href="#">
            Contacto
          </a>
        </li>
      </ul>
    </label>
  );
};

CustomOpenMenu.propTypes = {};

export default CustomOpenMenu;
