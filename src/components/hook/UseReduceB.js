import React,{ useContext } from 'react';
import  {counterContext} from './ReduceHook';

export default function UseReduceB() {
    const countContext = useContext(counterContext);
   return (
     <div>
       <h4>Reduce B</h4>

       <button onClick={() => countContext.dispatchValue("Increment")}>
         Increment
       </button>
       <button onClick={() => countContext.dispatchValue("Decrement")}>
         Decreament
       </button>
     </div>
   );
}
