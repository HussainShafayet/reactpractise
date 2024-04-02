import React, {useReducer, useState} from "react";
import ChildComponent from "./ChildComponent";
import NameInputCounter from "./NameInputCounter";
import BalanceInputCounter from "./BalanceInputCounter";
import {UserProvider} from "../contexts/userContext";

const initialState = 0;

const reducer = (state, action)=>{ 
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
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

 const [count, dispatch] = useReducer(reducer, initialState);
 const handleClick = (value)=>{
  dispatch(value);
 }

const balanceList = [
  { id: 1, balance: 2, trx_gl: { gl_id: 1, balance: 5 } },
  { id: 2, balance: 3, trx_gl: { gl_id: 2, balance: 1 } },
  { id: 3, balance: 4, trx_gl: { gl_id: 1, balance: 5 } },
  { id: 4, balance: 10, trx_gl: { gl_id: 3, balance: 0 } },
];

let prevTrxGlTotalBalance = {};

for (let i = 0; i < balanceList.length; i++) {
  const item = balanceList[i];
  const trxGlId = item.trx_gl.gl_id;
  const trxGlBalance = (prevTrxGlTotalBalance[trxGlId] || item.trx_gl.balance) + item.balance;

  // Update glNewBalance and glCurrentBalance
  item.glNewBalance = trxGlBalance;
  item.glCurrentBalance = (prevTrxGlTotalBalance[trxGlId] || item.trx_gl.balance) ;
  
  item.trx_gl[`glNewBalance${item.id}`] = item.glNewBalance;
  item.trx_gl[`glCurrentBalance${item.id}`] = item.glCurrentBalance;

  // Update prevTrxGlTotalBalance
  prevTrxGlTotalBalance[trxGlId] = trxGlBalance;
}

console.log(balanceList);



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

        {/*default props */}
        {/*{props.title}*/}
        {/*<NameInputCounter />*/}
        <UserProvider value={{name:'Babu'}} >
          <BalanceInputCounter />
        </UserProvider>
        

      </>
      
      
  )
 }

 FunctionComponent.defaultProps = {
  title: 'Default Props'
 }

 
 export default React.memo(FunctionComponent)