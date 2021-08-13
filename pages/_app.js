import CustomHeader from "../src/components/CustomHeader/CustomHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
