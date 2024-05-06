import Card from "./Card.jsx";
import styles from "./css/FeedbackForm.module.css";
import { useState, useContext, useEffect } from "react";
import Buttons from "./Buttons.jsx";
import RatingSelect from "./RatingSelect.jsx";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, settext] = useState("");
  const [rating, setrating] = useState("");
  const [message, setmessage] = useState("");
  const [isdisable, setisdisable] = useState(false);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setisdisable(false);
      settext(feedbackEdit.item.text);
      setrating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handletextChange = (e) => {
    if (text === "") {
      setisdisable(false);
      setmessage("");
    } else if (text !== "" && text.trim().length <= 10) {
      setisdisable(true);
      setmessage("- Text must be at least 10 character long.");
    } else {
      setisdisable(false);
      setmessage("");
    }
    settext(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setmessage("- Please write some text..");
    } else if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
    settext("");
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.h3}>
          How much would you give rating to our service?
        </h3>

        <RatingSelect select={(rating) => setrating(rating)} />

        <div className={styles.inputGroup}>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Write a review.."
            onChange={handletextChange}
            value={text}
          />
          <Buttons type="submit" isDisable={isdisable}>
            Send
          </Buttons>
        </div>
        <div style={{ marginLeft: "95px", marginTop: "7px" }}>
          {message && <div className="message">{message}</div>}
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
