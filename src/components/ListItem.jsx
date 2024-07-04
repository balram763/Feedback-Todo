import React, { useContext } from "react";
import FeedbackContext from "../providers/FeedbackContext";

const ListItem = ({ feedback }) => {
  const { removeFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <li className="list-group-item shadow">
      <h1>Rating : {feedback.rating}</h1>
      <p>Review : {feedback.review}</p>
      <span className="float-end">
        <button
          onClick={() => editFeedback(feedback)}
          className="btn btn-sm btn-warning"
        >
          Edit
        </button>
        <button
          onClick={() => removeFeedback(feedback.id)}
          className="btn btn-sm btn-danger mx-1"
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default ListItem;
