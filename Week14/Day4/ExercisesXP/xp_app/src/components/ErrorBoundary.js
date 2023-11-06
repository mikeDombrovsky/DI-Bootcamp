import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: "",
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo, hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>OOPS...=0 </h1>;
    }
    
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;
