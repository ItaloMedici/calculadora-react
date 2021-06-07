import React, { Component } from 'react'
import './calculadora.scss' 

import Button from '../components/Buttons/Button'
import Display from '../components/Display/Display'

export default class Calculator extends Component {

  constructor(props) {
    super(props);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    console.log('limpando');
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(digit) {
    console.log(digit);
  }

  render () {
    return (
      <div className="calculadora"> 
        <Display value="100"/>
        <Button label="AC" click={this.clear} triple/>
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