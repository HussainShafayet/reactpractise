import { useState } from "react"

export default function todo2() {
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
        <input type="text" value={todo} onInput={handleTodo} />
        <br />
        <span>{todo}</span>
        <br />
        <span>{warning || 'Good Jobs!'}</span>
    </div>
  )
}
