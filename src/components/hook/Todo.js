import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);
    const handleTodo = (e)=>{
        const inputValue = e.target.value;
        console.log(inputValue);
        const warning = inputValue.includes('.js') ? "Don't use .js extension" : null;

        setTodo(inputValue);
        setWarning(warning);

    }
  return (
    <div>
        <input type="text" value={todo} placeholder='Input todo~' onInput={handleTodo}/> <br></br>
        <span>{todo}</span><br></br>
        <span>{warning || 'Good Jobs!'}</span>
    </div>
  )
}
