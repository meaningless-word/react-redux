import React from "react";
import ReactDOM from "react-dom"; // для старой концепции
// import { createRoot } from "react-dom/client"; // для новой концепции

// ВС-код ругается на древность криэйтСтора, поэтому импортируется легаси-версия
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App.jsx";

const initialState = ["redux", "react"];

// редьюсер - реализация метода стора, оборабатываюющего экшены
function reducerChangeStore(state = initialState, action) {
  switch (action.type) {
    case "WRITE":
      return [...state, action.payload];
    default:
      return state;
  }
}

// объявление стора с указанием метода, которым он будет обрабатывать экшены
const store = createStore(reducerChangeStore);

// это типа современный синтаксис внедрения компонента приложения
// const rootElement = document.getElementById("root");
// createRoot(rootElement).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// переход на старую концепцию
// а здесь внимательно: передали не сам компонент приложения, а обернутый в провайдер, которому в параметрах дали стор
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
