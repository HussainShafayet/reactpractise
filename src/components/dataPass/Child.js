import React from 'react'


const Child=(props)=>{
    console.log(props)
    // props.onChildren("This is child")
    const {data} = props;
   
    return (
        <div>
            <p>{data}</p>
        </div>
    ) 
}
export default Child;