import React from "react";
import FeedbackItem from "./FeedbackItem";
import propTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p style={{ textAlign: "center" }}>No Feedback Yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
};

// FeedbackList.propTypes = {
//   feedback: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.any.isRequired,
//       rating: propTypes.any.isRequired,
//       text: propTypes.string.isRequired,
//     })
//   ),
// };

export default FeedbackList;
