const initialState = ["react", "redux"];

function libraries(state = initialState, action) {
  switch (action.type) {
    case "ADD_LIBRARY":
      return [...state, action.payload];
    case "DEL_LIBRARY":
      // пока без логики
      return state;
    default:
      return state;
  }
}

export default libraries;
