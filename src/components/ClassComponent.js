import React, {Component} from "react";

export default class ClassComponent extends Component {
    state = {date : new Date()}
    componentDidMount(){
        this.clockTimer = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

     tick = ()=>{
        this.setState({
            date: new Date()
        })
    }
    render(){
        return(
            <>
                <h1>Hi!, This Class component. props </h1>
                {this.state.date.toLocaleTimeString()}
            </>
            
        )
    }
}