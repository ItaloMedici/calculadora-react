import React, { Component } from 'react'
import './calculadora.scss' 

import Button from '../components/Buttons/Button'
import Display from '../components/Display/Display'

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = {...initialState};

  constructor(props) {
    super(props);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
  }

  clearDisplay() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    if(this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const flagEquals = operation === '=';
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      try {
        switch (currentOperation) {
          case ("+") : values[0] += values[1]; break;
          case ("-") : values[0] -= values[1]; break;
          case ("÷") : values[0] /= values[1]; break;
          case ("x") : values[0] *= values[1]; break;
          default: break;
        }
      } catch (err) {
        values[0] = this.state.values[0]
      }

      values[1] = 0;

      this.setState({
        displayValue: values[0],
        clearDisplay: !flagEquals,
        operation: flagEquals ? null : operation,
        values: values,
        current: flagEquals ? '0' : '1'
      })
    }
  }

  addDigit(digit) {
    /* Evita adição de 2 pontos em so numero */
    if(digit === '.' && this.state.displayValue.includes('.')) {
      return
    }
    
    const clearDisplay = this.state.displayValue === "0"
      || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + digit;

    this.setState({ displayValue, clearDisplay: false })

    if(digit !== '.') {
      const idx = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];

      values[idx] = newValue;

      this.setState({ values });
    }
  }

  render () {
    return (
      <div className="calculadora"> 
        <Display value={this.state.displayValue}/>
        <Button label="AC" click={this.clearDisplay} triple/>
        <Button label="÷" click={this.setOperation} operation/>
        <Button label="7" click={this.addDigit}/>
        <Button label="8" click={this.addDigit}/>
        <Button label="9" click={this.addDigit}/>
        <Button label="x" click={this.setOperation} operation/>
        <Button label="4" click={this.addDigit}/>
        <Button label="5" click={this.addDigit}/>
        <Button label="6" click={this.addDigit}/>
        <Button label="-" click={this.setOperation} operation/>
        <Button label="1" click={this.addDigit}/>
        <Button label="2" click={this.addDigit}/>
        <Button label="3" click={this.addDigit}/>
        <Button label="+" click={this.setOperation} operation/>
        <Button label="0" click={this.addDigit} double/>
        <Button label="." click={this.addDigit}/>
        <Button label="=" click={this.setOperation} operation/>
      </div>
    )
  }
}