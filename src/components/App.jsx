import React from "react";
import { connect } from "react-redux";

// function App() {
//   return <>Hi</>;
// }

// от функционального представления к классовому
// class App extends React.Component {
//   render() {
//     console.log(this.props);
//     return <div>Hi</div>;
//   }
// }

//export default App;

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <input type="text" />
        <button>click</button>
        <ul>
          {this.props.testStore.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// connect - это декоратор - функция, выполняющая дополнительные действия вокруг вызова основной функции
// у коннекта два параметра: mapStateToProps и mapDispatchToProps
export default connect(
  // mapStateToProps
  (state) => {
    return { testStore: state };
  },
  // mapDispatchToProps
  (dispatch) => ({})
)(App);
