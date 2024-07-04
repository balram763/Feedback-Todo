import React, { useContext } from "react";
import FeedbackContext from "../providers/FeedbackContext";

const AverageRating = () => {
  const { feedbacks } = useContext(FeedbackContext);

  const avgRating = feedbacks.reduce(
    (p, c) => p + c.rating / feedbacks.length,
    0
  );

  return (
    <div className="my-3 d-flex align-items-center justify-content-between">
      <p>Total Review : {feedbacks.length}</p>
      <p>Average Rating : {avgRating.toFixed(1)}</p>
    </div>
  );
};

export default AverageRating;
