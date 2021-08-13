/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./homePageView.module.scss";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomSocialLinks from "../../components/CustomSocialLinks/CustomSocialLinks";
import CustomCard from "../../components/CustomCard/CustomCard";

const HomePageView = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerDos}>
        {" "}
        <CustomSocialLinks />
        <label className={styles.homeLabelText}>
          <h1 className={styles.text}>Hola! Soy BDanielMr</h1>
          <h2 className={styles.textTall}>
            {`${"Developer always eager to learn good coding practices, I like coding and tools that keep me focused check my "}`}
            <a
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "white",
              }}
            >
              work
            </a>
          </h2>
        </label>
        <div></div>
      </div>
      <section style={{ background: "#dcece9", paddingTop: "25px" }}>
        <h2 style={{ textAlign: "center" }}>My Work</h2>
        <div>
          <CustomCard imageBackground="https://i.imgur.com/sBbHNzY.jpg" />
        </div>
        <div>
          <CustomCard imageBackground="https://i.imgur.com/mc2IBea.jpg" />
        </div>
        <div>
          <CustomCard imageBackground="https://i.imgur.com/HYLi9Wz.jpg" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Ver mas</p>
        </div>
      </section>

      <section style={{ background: "#f4f4f4", color: "black" }}>
        <div>footer</div>
        <div>footer</div>
      </section>
    </div>
  );
};

HomePageView.propTypes = {};

export default HomePageView;
