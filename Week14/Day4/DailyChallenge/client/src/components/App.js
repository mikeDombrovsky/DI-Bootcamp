import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hello: "",
      message: "",
    };
  }

  componentDidMount() {
    this.fetchHello().then((data) => this.setState({ hello: data.msg }));
  }

  async fetchHello() {
    const resp = await fetch("http://localhost:3002/api/hello");
    return await resp.json();
  }

  async onSubmitHandler(e) {
    e.preventDefault();
    console.log(e.target.msg_input.value);
    const resp = await fetch("http://localhost:3002/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: e.target.msg_input.value }),
    });
    const data = await resp.json();
    this.setState({ message: data.msg });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.hello}</h1>
        <form onSubmit={(e) => this.onSubmitHandler(e)}>
          <input name="msg_input" />
          <input type="submit" />
        </form>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default App;
