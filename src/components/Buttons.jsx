import propTypes from "prop-types";
import styles from "./css/FeedbackForm.module.css";

const Buttons = ({ children, type, isDisable }) => {
  return (
    <button
      type={type}
      disabled={isDisable}
      className={isDisable ? styles.sendDisableButton : styles.sendButton}
    >
      {children}
    </button>
  );
};

Buttons.propTypes = {
  children: propTypes.node.isRequired,
  type: propTypes.string.isRequired,
  isDisable: propTypes.bool.isRequired,
};

export default Buttons;
