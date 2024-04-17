import React from "react";
import ReactDOM from "react-dom"; // для старой концепции

// ВС-код ругается на древность криэйтСтора, пока не нашел, на что заменить
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App.jsx";

// экшен - это JS объект, у которого обязательно должно быть поле type, а так же произвольное количество данные
// чаще всего из передают в поле payload
const actionExample = { type: "", payload: "" };

// состояние - это некий объект, или массив, или даже примитивное значение, который хранит некие данные
// чаще всего это всё же объект, имеющий какие-то конкретные поля
// обычно описывается дефолтное состояние, оно будет присваиваться в тот момент, когда пользователь открыл приложение
const initialState = {
  cash: 0,
};
// редьюсер для стора - это функция, принимающая в качестве параметров состояние и экшен
// при открвтии приложения присваивается дефолтное состояние и оно будет храниться и изменятьсядо тех пор, пока пользователь
// не обновит страницу или не закроет приложение
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      state;
  }
};
// объявление стора с указанием метода, которым он будет обрабатывать экшены
const store = createStore(reducer);
// !!!!!! странно, но примеры из видосов без первого диспатча работают, а у меня - нет
// странно, что инициалСтейта в параметре редьюсера недостаточно, приходится пинать его диспатчем
// хотя в видосных уроках работало и без этого
// может это из-за устаревания объекта createStore?
store.dispatch({ type: "ADD_CASH", payload: 0 });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
