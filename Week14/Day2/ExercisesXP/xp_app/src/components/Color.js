import React from "react";

class Color extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteColor: "default",
      show: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldComponentUpdate", nextProps, nextState, nextContext);
    //part1-1
    return true;

    //part1-2
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return null;
  }

  changeFavoriteColorToBlue = () => {
    this.setState({ favoriteColor: "blue" });
  };

  deleteButtonHandler = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <h1>My favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeFavoriteColorToBlue}>
          Change Favorite Color
        </button>
        {this.state.show ? (
          <Child deleteButtonHandler={this.deleteButtonHandler} />
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Color;

class Child extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount ", this);
    alert("the component named Child is about to be unmounted");
  }

  render() {
    const { deleteButtonHandler } = this.props;
    return (
      <>
        <h1>Hello, I'm Child</h1>
        <button onClick={deleteButtonHandler}>delete child</button>
      </>
    );
  }
}
