import React, { Component } from 'react';
import  BoilingVerdict  from './boilingVerdict';
import TemperatuerInput from './TemperatuerInput';
import { toCelsius, toFahrenheit, convert } from '../../lib/converter';

export default class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c'
    }
    handleChange = (e,scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        })
    }
    
  render() {
    const {temperature,scale}=this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatuerInput temperature={celsius} scale="c" onTemperatureChange={this.handleChange} />
        <TemperatuerInput temperature={fahrenheit} scale="f" onTemperatureChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </div>
    );
  }
}
