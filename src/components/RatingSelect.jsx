import { useState, useContext, useEffect } from "react";
import styles from "./css/RatingSelect.module.css";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelectedValue(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    select(event.target.value);
  };

  return (
    <div className={styles.checkboxGroup}>
      {[...Array(10).keys()].map((index) => (
        <div key={index}>
          <input
            type="checkbox"
            name="rating"
            onChange={handleChange}
            value={index + 1}
            checked={selectedValue == index + 1}
            className={styles.checkboxInput}
          />
          <label key={index} className={styles.checkboxLable}>
            {index + 1}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RatingSelect;
