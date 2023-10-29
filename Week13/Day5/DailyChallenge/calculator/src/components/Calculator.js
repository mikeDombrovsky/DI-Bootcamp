import React, { Component } from "react";
import './Calculator.css'

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            left_num: 0,
            right_num: 0,
            operation: 'add',
            sum: 0
        }
        console.log(this.state);
    }

    setLeft = (e) => {
        this.setState({ left_num: e.target.value })
    }

    setRight = (e) => {
        this.setState({ right_num: e.target.value })
    }

    setOperation = (e) => {
        this.setState({ operation: e.target.value })
    }

    operate = () => {
        console.log(this.state.operation);
        switch (this.state.operation) {
            case 'add': this.add();
                break;
            case 'subtract': this.subtract();
                break;
            case 'multiply': this.multiply();
                break;
            case 'divide': this.divide();
                break;
            default: console.log('wrong operation');
        }
    }

    add = () => {
        this.setState({ sum: Number(this.state.left_num) + Number(this.state.right_num) })
    }

    subtract = () => {
        this.setState({ sum: Number(this.state.left_num) - Number(this.state.right_num) })
    }


    multiply = () => {
        this.setState({ sum: Number(this.state.left_num) * Number(this.state.right_num) })
    }

    divide = () => {
        if (Number(this.state.right_num) == 0){
            alert('cannot divide by 0');
            return;
        }
        this.setState({ sum: Number(this.state.left_num) / Number(this.state.right_num) })
    }

    render() {
        return (
            <>
                <h2>Adding Two Numbers</h2>
                <form>
                    <input type="number" value={this.state.left_num} onChange={this.setLeft} />
                    <input type="number" value={this.state.right_num} onChange={this.setRight} />
                </form>
                <div className="select_operation">
                    <select onChange={this.setOperation}>
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="divide">/</option>
                </select>
                </div>
                
                <button onClick={this.operate}>{this.state.operation} them!</button>
                <div id="result">{this.state.sum}</div>
            </>
        )
    }
}

export default Calculator;