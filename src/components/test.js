import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class Test extends Component {
    state = {count: 0}

    increament=(value)=>{
        console.log(value);
        this.setState({
            count:this.state.count+1
        });
    }
    submitHandler=(e)=>{
        e.preventDefault();
        console.log('onSubmit');
        console.log(e.target.username.value);
    }
    render() {
        let {count}=this.state;
        return (
            <div>
                <span>this is test={count}</span> 
                <button className='btn btn-info m-1' onClick={()=>this.increament(count)}>+</button>
                <Form onSubmit={this.submitHandler}>
                    <input type="text" name='username' id='username' placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type='submit'>Submit</button>
                </Form>
            </div>
        )
    }
}
