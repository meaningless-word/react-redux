import React from "react";
import ReactDOM from "react-dom"; // для старой концепции
// import { createRoot } from "react-dom/client"; // для новой концепции

// ВС-код ругается на древность криэйтСтора, поэтому импортируется легаси-версия
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App.jsx";
import reducer from "./redux/reducers/index.jsx";

// на этом шаге усложняется редьюсер - он становится комбинированным
// усложним структуру стора - станет объектом с полями-массивами
// но инициализация происходит теперь в отдельных редьюсерах, поэтому удаляем за ненадобностью

// редьюсер - реализация метода стора, оборабатываюющего экшены
// Redux предлагает разделять редьюсеры по зонам ответственности: в нашем случа,
// чтобы для каждого поля-массива был свой обработчик, а не мешать всё в кучу
// поэтому редьюсер отсюда переезжает в папку ./redux/reducers
// а вместо него мы импортнули комбинированный

// объявление стора с указанием метода, которым он будет обрабатывать экшены
const store = createStore(reducer);

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
