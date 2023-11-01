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

  // static getDerivedStateFromError(err){
  //     return {
  //         hasError: true
  //     }
  // }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo, hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: "5px solid #ff00008c", margin: "5px" }}>
          <h2>OOPS...=0</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            <div>Error</div>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    console.log(this.state);
    return (
      <div style={{ border: "5px solid pink", margin: "10px" }}>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;
