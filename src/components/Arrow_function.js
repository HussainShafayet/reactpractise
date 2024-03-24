import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Alertme = (a)=>{
    alert(a);
}

const Arrow =()=>{
    return (
    <div>
        <p className="text-center" >This is arrow function.</p>
        <button className="btn btn-info center" onClick={Alertme.bind(this,"I am from arrow function.")}>Click</button>
    </div>
    );
}
export default Arrow;