const FeedbackReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        feedbacks: state.feedbacks.filter((item) => item.id !== action.payload),
      };

    case "SAVE":
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks],
      };
    case "EDIT": {
      return {
        ...state,
        edit: { feedback: action.payload, isEdit: true },
      };
    }

    case "UPDATE": {
      return {
        ...state,
        feedbacks: state.feedbacks.map((feedback) =>
          feedback.id === action.payload.id ? action.payload : feedback
        ),
        edit: { feedback: {}, isEdit: false },
      };
    }
  }
};

export default FeedbackReducer;
