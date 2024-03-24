import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Class_practise extends Component {

    constructor(){
        super()
        this.state={
            'name':'This is state example',
            
        }
    }


    render() {
        return (
            <div>
            <div><h1>This is Class component and {this.props.name}</h1>
                <button className="btn btn-info">Click me</button>
                
            </div>
            <div>
                <p>{this.state.name}</p>
            </div>                

            </div>
        )
    }
}

export default Class_practise;