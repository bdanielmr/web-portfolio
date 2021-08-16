/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./homePageView.module.scss";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomSocialLinks from "../../components/CustomSocialLinks/CustomSocialLinks";
import CustomCard from "../../components/CustomCard/CustomCard";
import CustomCardView from "../../components/CustomCard/CustomCardView";

const HomePageView = (props) => {
  return (
    <>
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

          <CustomCard
            title="Hello Movie"
            imageBackground="https://i.imgur.com/sBbHNzY.jpg"
          />

          <CustomCard
            title="Heroku User"
            imageBackground="https://i.imgur.com/mc2IBea.jpg"
          />

          <CustomCard
            title="Weather App"
            imageBackground="https://i.imgur.com/HYLi9Wz.jpg"
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              style={{
                cursor: "pointer",
                marginBottom: "25px",
                textDecoration: "underline",
              }}
            >
              Ver mas
            </a>
          </div>
        </section>

        <section
          style={{
            background: "#222",
            color: "black",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "70px",
            alignItems: "center",
            justifyContentc: "center",
          }}
        >
          <CustomSocialLinks />
        </section>
      </div>
    </>
  );
};

HomePageView.propTypes = {};

export default HomePageView;
