import React, {useReducer, useState} from "react";
import BalanceInputCounter from "./BalanceInputCounter";
import {UserProvider} from "../contexts/userContext";

//const initialState = 0;

//const reducer = (state, action)=>{ 
//  switch (action) {
//    case 'increment':
//      return state + 1;
//    case 'decrement':
//      return state - 1;
//    default:
//      return state;
//  }
//}

const initialState = {
  value: 0,
  value2:0
};
function reducer(state, action) {
  switch (action.type) {
    case 'increase':
      return {...state, value: state.value + action.value};
    case 'decrease':
      return {...state, value: state.value - action.value};
    case 'increase2':
      return {...state, value2: state.value2 + action.value};
    case 'decrease2':
      return {...state, value2: state.value2 - action.value};
    case 'reset':
      return initialState;
    default:
      throw new Error()
  }
}

export const counterContext = React.createContext();
 
 const FunctionComponent = (props) => {
    //const [user, setUser] = useState({
    //    name: 'Rahim',
    //    sex: 'male',
    //    location:{
    //        state: 'Dhaka',
    //        country: 'Bangladesh'
    //    }
    //})
    // Step 1: Create a state variable for the nested object
  //const [formData, setFormData] = useState({
  //  user: {
  //    firstName: '',
  //    lastName: '',
  //  },
  //  email: '',
  //});
    //const [people, setPeople] = useState([
    //    {name:'Jadu',
    //    isSeen: true,
    //    location: 'BD'},
    //    {name:'Modhu',
    //    location: 'USA'},
    //    {name:'Kodhu',
    //    location: 'IND'},
    //])
    const handleUserChange = ()=>{
      //setUser({...user, name: 'Karim'})
      //setUser({...user, location: {
      //    ...user.location, state: 'Sylhet'
      //}})
      //let filterPeope = [...people];
      // filterPeope = filterPeope.filter((item)=>( item.isSeen)
      //);

      //setPeople(filterPeope);
  }
  //const handleInput = (event)=>{
  //    const { name, value } = event.target;
      
  //    setUser((prevPerson) => ({
  //    ...prevPerson,
  //    [name]: value,
  //    }));
  //    console.log(user);
  //}

  //function handleInputChange(event) {
  //    const { name, value } = event.target;
  //    console.log(name, value, formData);
  //    setFormData( prev => ({...prev, user: {
  //      ...prev.user, [name]: value
  //    }}));
  //  }

  //city quiz
  //const [answer, setAnswer] = useState('');
  //const [error, setError] = useState(null);
  //const [status, setStatus] = useState('typing');

  //const onTextChange = (event)=>{
  //  setAnswer(event.target.value);
  //}

  //const handleFormSubmit = async (event)=>{
  //  event.preventDefault();
  //  setStatus('submitting');
  //  try {
  //    await submitForm(answer);
  //    setStatus('success');
  //  } catch (error) {
  //    setStatus('typing');
  //    setError(error);
  //  }
  //}

  //const submitForm = (value)=>{
  //  return new Promise((resolve, reject) => {
  //    setTimeout(() => {
  //      let shouldError = answer.toLowerCase() != 'dhaka';
  //      if (shouldError) {
  //        reject(new Error('Good guess but wrong answer. Try again!'));
  //      } else {
  //        resolve();
  //      }
  //    }, 1500);
  //  })
  //}

  // use reducer

// const [count, dispatch] = useReducer(reducer, initialState);
// const handleClick = (value)=>{
//  dispatch(value);
// }

const [count, dispatch] = useReducer(reducer, initialState);

  return(
      <>
        {/*<h2>City Quiz!</h2>
        What is the capital of Bangladesh?
        <form onSubmit={handleFormSubmit}>
          <textarea value={answer} onChange={onTextChange} disabled={status === 'submitting'}></textarea>
          <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
        </form>
        {error != null && <p className="Error">
          {error.message}
        </p>}
        {status === 'success' && <>
          You are gneous
        </>}*/}
        {/*<button className="btn" onClick={()=>handleClick('decrement')}>Decrement</button>

        <span className="text-success">Count: {count}</span>
        <counterContext.Provider value={{counterDispatch: handleClick}}>
          <ChildComponent /> 
        </counterContext.Provider>*/}

       
        {/*{props.title}*/}
        {/*<NameInputCounter />*/}
        <UserProvider value={{name:'Shafu'}} >
          <BalanceInputCounter />
        </UserProvider>
        <br></br>
        count: {count.value}<br></br>
        <button className="btn btn-primary mr-1" onClick={()=> dispatch({type:'increase',value:2})}>Increase 2</button>
        <button className="btn btn-primary mr-1" onClick={()=> dispatch({type:'decrease', value:2})}>Decrese 2</button>
        <button className="btn btn-primary " onClick={()=> dispatch({type:'reset'})}>Reset</button>
        <br></br>
        count: {count.value2}<br></br>
        <button className="btn btn-primary mr-1" onClick={()=> dispatch({type:'increase2',value:5})}>Increase 5</button>
        <button className="btn btn-primary mr-1" onClick={()=> dispatch({type:'decrease2', value:5})}>Decrese 5</button>
        <button className="btn btn-primary " onClick={()=> dispatch({type:'reset'})}>Reset</button>

        {/* 

         const Grettings = ({name})=>{
          const [count, setCount] = useState(0);
          return(
            <div>
              Hello name {name};
              <button onClick={()=>setCount(count+1)}>click count: {count}</button>
            </div>
          )
         }   

        useEffet(()=>{
        fetchData();
        }, [])

        //class
        class Example extends Rect.Component{
        compunentDidMount();

        }
        const ThemeContext = React.createContext();
        const App = ()=>{
          <ThemeContext.Provider value={color:"black"}>
          <ToolBar />
          </ThemeContext.Provider>
        }
        */}

      </>

     
      
      
  )
 }

 FunctionComponent.defaultProps = {
  title: 'Default Props'
 }

 
 export default React.memo(FunctionComponent)