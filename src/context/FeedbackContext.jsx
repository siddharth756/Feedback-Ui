import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: 1,
      text: "This is feedback 1..",
      rating: 8,
    },
    {
      id: 2,
      text: "This is feedback 2..",
      rating: 7,
    },
    {
      id: 3,
      text: "This is feedback 3..",
      rating: 10,
    },
  ]);

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setfeedback([newFeedback, ...feedback]);
  };

  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //set item to update feedback
  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    });
  };

  //update item

  const updateFeedback = (id, upItem) => {
    setfeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
