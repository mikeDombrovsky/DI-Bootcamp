import React, { Component } from "react";

class BuggyCounter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    };

    hendleClick = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        if (this.state.counter > 4) {
            throw new Error('I crashed!!!');
        }

        return (
            <div onClick={this.hendleClick} style={{backgroundColor:'#779999', margin:'2px', color:'white'}}>
                <p>Click on me 5 times!</p>
                {this.state.counter}
            </div>
        );
    };
};

export default BuggyCounter;