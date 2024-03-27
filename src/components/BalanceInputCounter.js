import React from 'react';
import KeyCounter from './HOC/keyCounter';

const BalanceInputCounter = (props) => {
    const {count, handleInput} = props;
  return (
    <>
        <input type='number' onInput={handleInput} />
        total: {count}
    </>
  )
}

export default KeyCounter(BalanceInputCounter)