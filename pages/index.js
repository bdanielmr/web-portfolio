/* eslint-disable no-unused-vars */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomePageView from "../src/Views/HomePageView/HomePageView";
export default function Home() {
  return (
    <div>
      <HomePageView />
    </div>
  );
}
