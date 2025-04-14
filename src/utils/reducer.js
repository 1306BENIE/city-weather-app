const initialState = {
  data: {},
};

const WheatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WHEATHER":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
