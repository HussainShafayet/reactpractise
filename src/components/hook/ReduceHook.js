import React, { useReducer } from 'react';
import GetPost from './GetPost';
import GetPost2 from './GetPost2';
import UseReduceA from './UseReduceA';
import reduceStyle from '../../assets/css/hook/reduceHook.module.css';

export const counterContext = React.createContext();
const initialState = 0;
const reducer = (state, action) =>{
    switch(action){
        case 'Increment':
            return state + 1;
        case 'Decrement':
            if(state > 0){
                return state - 1;
            }else{
                return state;
            }
        default:
            return state;
    }
}
export default function ReduceHook() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span className={reduceStyle.span}> count {count}</span>
      <counterContext.Provider value={{dispatchValue:dispatch}}>
        <UseReduceA />
      </counterContext.Provider>
      <GetPost />
      <GetPost2 />
    </div>
  );
}
