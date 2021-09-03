/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styles from "./customContact.module.scss";
const CustomContact = (props) => {
  return (
    <article className={styles["l-design-widht"]}>
      <div className={styles.card}>
        <h2>Hi, send your email to download my cv</h2>
        <label className={styles.input}>
          <input className={styles.input__field} type="text" placeholder=" " />
          <span className={styles.input__label}>Email</span>
        </label>
        <div className={styles["button-group"]}>
          <button onClick={() => alert("fi")}>Send</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    </article>
  );
};

CustomContact.propTypes = {};

export default CustomContact;
