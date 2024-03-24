import React, { Component } from 'react'
import Home from './home'
import Login from './login'

export default class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false
        }
    }
    
    render() {
        const {isLoggedIn}=this.state;
        // if(isLoggedIn){
        //     return (
        //         <div>
        //             <Home />
        //         </div>
        //     )
        // }else{
        //         return(
        //             <div>
        //                 <Login />
        //             </div>
        //         )
        //     }
        // let element;
        // if(isLoggedIn){
        //     element = <Home />
        // }else{
        //     element=<Login />
        // }
        return(
            <div>
                {isLoggedIn? <Home /> : <Login />}
            </div>
        )
    }
}
