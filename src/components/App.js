import React from "react";
import {connect} from "react-redux";
import Todos from "./Todos";
import Goals from "./Goals";
import {
    handleInitialData
} from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    if (this.props.loading === true) {
      return (
          <h3>
            Loading...
          </h3>
      )
    }

    return (
        <div>
          <Todos />
          <Goals />
        </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);
