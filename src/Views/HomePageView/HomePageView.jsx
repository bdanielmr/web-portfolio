/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "./homePageView.module.scss";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomSocialLinks from "../../components/CustomSocialLinks/CustomSocialLinks";
import CustomCard from "../../components/CustomCard/CustomCard";

const HomePageView = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerDos}>
          {" "}
          <CustomSocialLinks />
          <label className={styles.homeLabelText}>
            <h1 className={styles.text}>Hi! Iam BDanielMr</h1>
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
        <section
          style={{
            background: "#dcece9",
            paddingTop: "25px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>My Work</h2>

          <CustomCard
            title="Hello Movie"
            imageBackground="https://i.imgur.com/sBbHNzY.jpg"
            description="App that shows information about movies - Made with React and Hooks with use of useReducer and useContext to control the global state; and react-router-dom for routing and more
            "
            tec={["React", "react-router-dom", "hooks", "sass"]}
          />

          <CustomCard
            title="Heroku User"
            imageBackground="https://i.imgur.com/mc2IBea.jpg"
            description="app that registers users and lists them at home. Performed with vue, vue-router and vuex as global state, use of axios and as vuevalidate for validations including nprogress, sass and others"
            tec={["Vue", "vue-router", "vuex", "sass"]}
          />

          <CustomCard
            title="Weather App"
            imageBackground="https://i.imgur.com/HYLi9Wz.jpg"
            description="app that consumes external weather apis and shows the statistics obtained made with vue"
            tec={["Vue", "vue-router", "axios", "sass"]}
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
              show more
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
