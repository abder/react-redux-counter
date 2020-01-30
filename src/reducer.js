const initialState = { count: 0 };
export default (state = initialState, action) => {
  if (action.type === "increase") {
    return { count: state.count + 1 };
  }

  if (action.type === "decrease") {
    return { count: state.count - 1 };
  }

  return state;
};
