import "./css/FeedbackItem.css";
import Card from "./Card.jsx";
import propTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <div>
        <FaEdit style={{ marginRight: "10px" }} onClick={() => editFeedback(item)}/>
        <FaTimes onClick={() => deleteFeedback(item.id)} />
      </div>
    </Card>
  );
};
FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
};

export default FeedbackItem;
