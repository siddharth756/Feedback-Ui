import propTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStatus() {
  const { feedback } = useContext(FeedbackContext);

  let average = 0;
  feedback.forEach((e) => {
    return (average += parseInt(e.rating));
  });

  if (average !== 0) {
    average = (average / feedback.length).toFixed(1).replace(/[. 0]0/g, "");
  }
  return (
    <div
      className="feedback-state"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "600px",
        margin: "auto",
      }}
    >
      <h5>{feedback.length} Reviews</h5>
      <h5>Average Rating : {average}</h5>
    </div>
  );
}

// FeedbackStatus.propTypes = {
//   feedback: propTypes.array.isRequired,
// };

export default FeedbackStatus;
