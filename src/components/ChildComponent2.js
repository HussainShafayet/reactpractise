import React, {useContext} from 'react';
import { counterContext } from './FunctionComponent';

export default function ChildComponent2() {
    const countContext = useContext(counterContext);
  return (
    <>
        <button className="btn" onClick={()=>countContext.counterDispatch('increment')}>Increment </button>
    </>
  )
}
