import React, {useContext, useEffect, useRef} from 'react'
import Acontext from './A';
import {useReducer} from 'react';
const initialState = {
    value: 0
}
function reducer(state, action) {
    switch (action.type) {
        case 'increase':
            return {...state, value: state.value + action.value}
    
        default:
            return state;
    }
    
}
const B = () => {
    //const {count} = useContext(Acontext);
    //console.log('const', count);
    const [count, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[])
  return (
    <div>
        <button onClick={()=>dispatch({type:'increase',value:1})}>Click {count.value}</button>
        <br></br>
        <input ref={inputRef} />
    </div>
  )
}

export default B;