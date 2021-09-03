/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./customWorkbook.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { getGithubRepo } from "../../helpers/getGithubRepo";

const CustomWorkbook = (props) => {
  const { data: getRepos } = useFetch(getGithubRepo);
  const auxRepos =
    !!getRepos &&
    getRepos?.map((repo, index) => {
      return { ...repo, imageRepoIndex: index };
    });
  console.log(getRepos);
  console.log(auxRepos);
  return (
    <div>
      <h1 style={{ marginLeft: "10%" }}>Workbook - Repos </h1>

      <div className={styles.band}>
        {auxRepos?.map((repo, i) => {
          return (
            repo.name === "hello-movie" && (
              <div key={i} className={styles["item-1"]}>
                <a
                  href={repo?.html_url}
                  className={styles.card}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={styles.thumb}
                    style={{
                      backgroundImage:
                        "url(https://static.platzi.com/media/blog/cover-github-105d8310-41f9-4d9e-91e0-4cbde3d8c645.jpg)",
                    }}
                  ></div>
                  <article>
                    <h1>{repo?.name}</h1>
                    <p> {repo?.description}</p>
                    <span></span>
                  </article>
                </a>
              </div>
            )
          );
        })}
        {auxRepos?.map((repo, i) => {
          return (
            repo.name !== "hello-movie" && (
              <div key={i} className={styles["item-2"]}>
                <a
                  href={repo?.html_url}
                  className={styles.card}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={styles.thumb}
                    style={{
                      backgroundImage:
                        "url(https://www.campusmvp.es/recursos/image.axd?picture=/2020/2T/github/github.png)",
                    }}
                  ></div>
                  <article>
                    <h1>{repo?.name}</h1>
                    <p> {repo?.description}</p>
                  </article>
                </a>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

CustomWorkbook.propTypes = {};

export default CustomWorkbook;
