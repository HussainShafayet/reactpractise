import React,{useState, useRef,useEffect} from 'react';
import Input from './Input';

export default function PractiseHook() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState({'username':'', 'password':''});
  const [formData, setFormData] = useState([{'name':'', 'email':''}]);

  const {username, password} = login;
  const getInput = (e) => {
    setLogin({...login, [e.target.name]:e.target.value});
  }
  const appendForm = ()=>{
    setFormData([...formData,{
      name: '',
      email: ''
    }]);
    console.log('formData: ',formData);
  }
  const getFormData = (index,event) =>{
    const values = [...formData];
    values[index][event.target.name] = event.target.value;
    setFormData(values);
  }
  useEffect(()=>{
    inputRef.current.focus();
  });
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increament
      </button>
      <span>Count {count}</span>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decreament
      </button>
      <div>
        <form action="">
          <Input
            type="text"
            name="username"
            id="username"
            placeholder='Username'
            value={username}
            onInput={getInput}
            ref={inputRef}
          />
          <input
            type="password"
            name="password"
            value={password}
            onInput={getInput}
          />
        </form>
      </div>
      <div>
        {formData.map((item, index) => (
          <form key={index}>
            <input
              type="text"
              name="name"
              value={item.name}
              onChange={(event) => getFormData(index, event)}
            />
            <input
              type="email"
              name="email"
              value={item.email}
              onChange={(event) => getFormData(index, event)}
            />
          </form>
        ))}
        <button onClick={appendForm}>ADD More</button>
      </div>
    </div>
  );
}
