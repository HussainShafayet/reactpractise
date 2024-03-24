import React, { Component } from 'react'
const ScaleNames = {
    'c': 'Celsius',
    'f': 'Fahrenheit'
}
export default class TemperatuerInput extends Component {
   
  render() {
    const { temperature, scale, onTemperatureChange } = this.props;
    return (
      <div>
            <fieldset>
                <legend>Enter temperature in {ScaleNames[scale]}:</legend>
                <input type="text" placeholder={ScaleNames[scale]} value={temperature} onChange={(e)=> onTemperatureChange(e,scale)} />
            </fieldset>
      </div>
    )
  }
}
