import React from "react";
import { connect } from "react-redux";

// function App() {
//   return <>Hi</>;
// }

class App extends React.Component {
  render() {
    console.log(this.props);
    return <div></div>;
  }
}

// connect - это декоратор - функция, выполняющая дополнительные действия вокруг вызова основной функции
// у коннекта два параметра: mapStateToProps и mapDispatchToProps
export default connect(
  // mapStateToProps
  (state) => ({
    testStore: state,
  }),

  // mapDispatchToProps
  (dispatch) => ({})
)(App);
