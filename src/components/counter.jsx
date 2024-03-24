import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        'count':0
        
     }
    handleIncrement = () => {
      this.setState({count: this.state.count + 1 })
    };
    render() { 
        console.log("props",this.props)
        return (
            <div className="container">
                <span className={this.getClasses()}>{this.formateCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-info btn-sm">Increament</button>
                
            </div>
        );
    }
    getClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formateCount(){
        const {count} =this.state;
       return count === 0 ? 'zero' : count;
    }
}
 
export default Counter;
