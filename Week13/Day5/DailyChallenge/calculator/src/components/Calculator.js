import React, { Component } from "react";

class Calculator extends Component {
    render() {
        return (
            <>
                <h2>Adding Two Numbers</h2>
                <input type="number" />
                <input type="number" />
                <button>Add Them!</button>
                <div id="result">0</div>
            </>
        )
    }
}

export default Calculator;