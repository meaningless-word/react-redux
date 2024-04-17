const initialState = ["angular"];

function frameworks(state = initialState, action) {
  switch (action.type) {
    case "ADD_FRAMEWORK":
      return [...state, action.payload];
    case "DEL_FRAMEWORK":
      // пока без логики
      return state;
    default:
      return state;
  }
}

export default frameworks;
