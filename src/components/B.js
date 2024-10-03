import React, {Suspense, useContext, useEffect, useMemo, useRef} from 'react'
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
    },[]);
    //const formattedData = useMemo(()=> {filtered(items)}, [items]);

    //lazy component
    const Lazycomponent = React.lazy(()=>import('./Card'))
  return (
    <div>
        <button onClick={()=>dispatch({type:'increase',value:1})}>Click {count.value}</button>
        <br></br>
        <input ref={inputRef} />
        <Suspense fallback={<div>Loading....</div>}>
            <Lazycomponent />
        </Suspense>
    </div>
  )
}

export default B;