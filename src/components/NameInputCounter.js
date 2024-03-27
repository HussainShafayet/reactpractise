import React from 'react';
import keyCounter from './HOC/keyCounter';

const NameInputCounter = (props) => {
    const {count, handleInput} = props;
  return (
    <>
      <div>
        <input type='text' onInput={handleInput} />
        total: {count}
      </div>
        
      </>
  )
}

export default keyCounter(NameInputCounter)