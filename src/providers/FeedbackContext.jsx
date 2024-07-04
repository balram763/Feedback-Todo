import { createContext, useReducer } from "react";
import FeedbackReducer from "./FeedbackReducer";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const initialState = {
    feedbacks: [
      { id: 1, rating: 5, review: "Very Good Product!!" },
      { id: 2, rating: 2, review: "Very Bad Product!!" },
    ],
    edit: {
      feedback: {},
      isEdit: false,
    },
  };

  const [state, dispatch] = useReducer(FeedbackReducer, initialState);

  //   Remove Feedback
  const removeFeedback = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  //   Add Feedback
  const addFeedback = (rating, review) => {
    const newFeedback = {
      id: crypto.randomUUID(),
      rating,
      review,
    };

    dispatch({
      type: "SAVE",
      payload: newFeedback,
    });
  };

  //   Edit Feedback

  const editFeedback = (feedback) => {
    dispatch({
      type: "EDIT",
      payload: feedback,
    });
  };

  //   Update Feedback

  const updateFeedback = (updatedFeedback) => {
    dispatch({
      type: "UPDATE",
      payload: updatedFeedback,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks: state.feedbacks,
        edit: state.edit,
        removeFeedback,
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
