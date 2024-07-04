import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { FeedbackProvider } from "./providers/FeedbackContext";
import AverageRating from "./components/AverageRating";

const App = () => {
  return (
    <FeedbackProvider>
      <Navbar />
      <div className="container p-5">
        <h1 className="text-center text-secondary">Feedback App</h1>
        <Form />
        <AverageRating />
        <ListGroup />
      </div>
    </FeedbackProvider>
  );
};

export default App;
123;
