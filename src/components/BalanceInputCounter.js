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
          {(username)=>{
            return (<div>
              Welcome {username} 
            </div>)
          }}
        </UserConsumer>
    </>
  )
}

export default KeyCounter(BalanceInputCounter)