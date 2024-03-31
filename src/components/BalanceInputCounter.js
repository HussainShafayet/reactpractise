import React from 'react';
import KeyCounter from './HOC/keyCounter';
import {UserConsumer} from '../contexts/userContext';

const BalanceInputCounter = (props) => {
    const {count, handleInput} = props;
  return (
    <>
        <input type='number' onInput={handleInput} />
        total: {count}
        <UserConsumer>
          {({name})=>{
            return (<div>
              Welcome {name} 
            </div>)
          }}
        </UserConsumer>
    </>
  )
}

export default KeyCounter(BalanceInputCounter)