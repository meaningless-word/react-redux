import React from "react";
import ReactDOM from "react-dom"; // для старой концепции
// import { createRoot } from "react-dom/client"; // для новой концепции

// ВС-код ругается на древность криэйтСтора, пока не нашел, на что заменить
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App.jsx";

const initialState = ["redux", "react"];

// поиск нереактовых компонентов для показа работы редукса вне реакта
// они у нас в index.html расположены за границами рутового элемента
// const testUl = document.querySelector(".test-ul");
// const testButton = document.querySelector(".test-button");
// const testInput = document.querySelector(".test-input");

// редьюсер - реализация метода стора, оборабатываюющего экшены
function changeStore(state = initialState, action) {
  switch (action.type) {
    case "WRITE":
      return [...state, action.payload];
    default:
      return state;
  }
}

// объявление стора с указанием метода, которым он будет обрабатывать экшены
const store = createStore(changeStore);

// это типа подписка компонента на обновление стора
// store.subscribe(() => {
//   testUl.innerHTML = "";
//   testInput.value = "";
//   store.getState().map((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     testUl.appendChild(li);
//   });
// });

// при нажатии на кнопку формируется экшен, которое говорит стору внести запись
// testButton.addEventListener("click", () => {
//   store.dispatch({ type: "WRITE", payload: testInput.value });
// });

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
