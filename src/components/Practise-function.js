import React from 'react'

function Practise_function(props) {
    const { name, age } = props;

    function do_this() {
        alert('Hello');
    }
    return ( 
    <div>
        <button className = "btn btn-warning" onClick = {do_this} > Click me </button>
        <p className = "text-center"> This is {name}and {age}. </p>
        <h1> </h1> 
    </div>
    );
}
export default Practise_function;