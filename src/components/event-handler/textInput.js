import React, { Component } from 'react'

export default class EventHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            changedValue: ''
        }
        this.inputValueChanged= this.inputValueChanged.bind(this);
    }

    // inputValueChanged =(e)=>{
    //     // this.setState({
    //     //     changedValue: e.target.value
    //     // })
    //     // this.setState({
    //     //     changedValue: e.target.value
    //     // },()=>{
    //     //     console.log(this.state.changedValue);
    //     // })
    // }
    inputValueChanged(e){
        this.setState({
            changedValue:e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.inputValueChanged}/>
                <p>Input value= {this.state.changedValue}</p>
            </div>
        )
    }
}
