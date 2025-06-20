import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Class_practise from './components/Practise_class'
import Practise_function from './components/Practise-function'
import Arrow from './components/Arrow_function'
// import Counters from './components/counters'
import Test from './components/test'
import Index from './components/conditional-template/index';
import EventHandler from './components/event-handler/textInput';
import EventHooks from './components/EventsHooks';
import RegistrationForm from './components/Form/RegistrationForm';
import Parent from './components/dataPass/Parent';
import Nav from './components/navBar/nav';
import Dashboard from './components/hr/dashboard';
import Employees from './components/hr/employees';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {use, useContext, useEffect, useState} from 'react';
import useStore from './store';


function App() {
  /* let items=[];
  for (let x=0; x<Data.length;x++ ){
    items.push(<Practise_function name={Data[x].Name} age={Data[x].age} />)
  } */
 const {count, increament, decreament} = useStore();

  const Counter = ()=> {
    //const [count, setCount] = useState(0);
    const arr = [1, 2, 3];
    const sum = arr.reduce((acc, item)=> {
      return acc + item;
      
    }, 0 );
    console.log(sum);
    
    return (
      <div>
        <button onClick={()=> increament()}>Inc +</button>
        <span>{count}</span>
        <button onClick={()=> decreament()}>Dec - </button>

      </div>
    )
  }
  function outer() { 
    let val = 0;
    const fetchData = new Promise((resolve, reject)=>{
      setTimeout(() => 
        resolve('Done')
      , 1000);
    })
    fetchData.then(result=>{
      console.log(result);
    }).catch(error=> console.log(error))
    
    return function inner(){
      val++;
      console.log(val);
    }
  }

  const ToggleText = () => {
    const [isShow, setShow] = useState(true);
  
    const handleToggle = () =>{
      setShow(!isShow);
    }
    return (
      <div>
        <button onClick={handleToggle}>
          {isShow ? 'Hide' : 'Show'} Text
        </button>
        {
          isShow ? 'This is a text' : ''
        }
      </div>
    )
  }

  const FormInput = () =>{
    const [user, setUser] = useState({name: '', email: ''});
    const handleInput = (e) => {
      setUser({...user, [e.target.name]: e.target.value});
  }
  
  const formSubmit = (e) =>{
    e.preventDefault();
    console.log('form submit successfully', user)
  }

    return (
      <div>
        <form onSubmit={formSubmit}>
          <input onChange={handleInput} type='text' name='name' value={user.name} />
          <input onChange={handleInput} type='email' name='email' value={user.email} />
          <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }

    const FetchData = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
      const fetchApi = async ()=>{
        try {
          setIsLoading(true)
          const res = await fetch('https://dummyjson.com/users');
          if (!res.ok) throw new Error('Data not load');
          const data = await res.json();
          setUsers(data.users);
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false);
          setUsers([]);
          setError(error.message);
        }
        
      };
      fetchApi();
    }, []);

    return (
      <div>
        {isLoading? 'Loading....' :
          users.map((user)=> (
            <>
              <span key={user.id}>First Name: {user.firstName}</span><br />
            </>
          ))
        }
        {error}
      </div>
    )
   }

 
 

  return (
    <div>
      {/* <div><Card /></div>
      <div><Class_practise name="class-props" /></div>
      <div>{items}</div>
      <div><Arrow/></div> */}
      {/*
        <EventHandler />
        <EventHooks />
        <RegistrationForm />
        <Parent />
        */}
      {/*<Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Dashboard />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Router>*/}
      {/*<Counter />*/}
      {/*<ToggleText />*/}
      {/*<FormInput />*/}
      {/*<FetchData />*/}
    </div>
  );
}

export default App;


