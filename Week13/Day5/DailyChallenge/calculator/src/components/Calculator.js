import React, { Component } from "react";
import './Calculator.css'

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            left_num: 0,
            right_num: 0,
            sum: 0
        }
    }

    setLeft = (e) => {
        this.setState({ left_num: e.target.value })
    }

    setRight = (e) => {
        this.setState({ right_num: e.target.value })
    }

    sum = () => {
        this.setState({ sum: Number(this.state.left_num) + Number(this.state.right_num) })
    }

    render() {
        return (
            <>
                <h2>Adding Two Numbers</h2>
                <form>
                    <input type="number" value={this.state.left_num} onChange={this.setLeft} />
                    <input type="number" value={this.state.right_num} onChange={this.setRight} />
                </form>
                <select>
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="mutiply=">*</option>
                    <option value="divide=">/</option>
                </select>
                <button onClick={this.sum}>Add Them!</button>
                <div id="result">{this.state.sum}</div>
            </>
        )
    }
}

export default Calculator;