import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            errorInfo:'',
            hasError: false
        }
    }

    // static getDerivedStateFromError(err){
    //     return {
    //         error: true
    //     }
    // }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: error, errorInfo: errorInfo, hasError:true });
    }

    render() {

        if (this.state.hasError) {
            return (
                <>  
                <h2>Something went wrong...</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    <div>Error</div>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
                </>
              
            )
        }
        console.log(this.state);
        return this.props.children;
    }
};

export default ErrorBoundary;