import React, {useState, useEffect} from 'react';
import KeyCounter from './HOC/keyCounter';
import {UserConsumer} from '../contexts/userContext';

const BalanceInputCounter = (props) => {
    const {count, handleInput} = props;
    const [lists, setList] = useState([]);
    useEffect(() => {
      setList([...lists, {name: 'Rahim'}]);
    }, [])
    console.log('list', lists);
    
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
        {lists.map((item, index)=>
          <span key={index}>Name: {item.name}</span>
        )}
    </>
  )
}

export default KeyCounter(BalanceInputCounter)