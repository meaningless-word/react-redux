import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  addLibrary() {
    console.log(this.inputValue.value);
    this.props.addElement(this.inputValue.value);
    this.inputValue.value = "";
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          ref={(input) => {
            this.inputValue = input;
          }}
        />
        <button onClick={this.addLibrary.bind(this)}>click</button>
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
  (dispatch) => ({
    addElement: (elem) => {
      dispatch({ type: "WRITE", payload: elem });
    },
  })
)(App);
