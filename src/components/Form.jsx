import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../providers/FeedbackContext";

const Form = () => {
  const { addFeedback, edit, updateFeedback } = useContext(FeedbackContext);

  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    edit.isEdit
      ? updateFeedback({
          id: edit.feedback.id,
          rating,
          review,
        })
      : addFeedback(rating, review);
    setRating(1);
    setReview("");
  };

  useEffect(() => {
    setRating(edit.feedback.rating);
    setReview(edit.feedback.review);
  }, [edit]);

  return (
    <div className="card p-3 shadow">
      <form onSubmit={handleSubmit}>
        <select
          className="form-select my-3"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
        >
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
        </select>
        <textarea
          onChange={(e) => setReview(e.target.value)}
          value={review}
          type="text"
          className="form-control my-3"
          placeholder="Enter Your Review"
        ></textarea>
        <button className="btn btn-success w-100">Submit Review</button>
      </form>
    </div>
  );
};

export default Form;
