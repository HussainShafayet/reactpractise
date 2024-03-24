import React,{useState} from "react";
import style from './form.module.css'
export default function RegistrationForm(){
    // const [name,setName]=useState('');
    // const [email,setEmail]= useState('');
    // const [password,setPassword]= useState('');
    // const getName=(e)=>{
    //     setName(e.target.value);
    // }
    // const getEmail=(e)=>{
    //     setEmail(e.target.value);
    // }
    // const getPassword=(e)=>{
    //     setPassword(e.target.value);
    // }
    const [user,setUser]=useState({name:'',email:'',password:''});
    const {name,email,password}=user;
    const getUser=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const registrationFormSubmit =(e)=>{
        console.log('formsubmit');
        e.preventDefault();
        const userInfo=user;
        console.log('UserInfo: ',userInfo);
    }
    return (
        <div>
            <form onSubmit={registrationFormSubmit}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={getUser} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={email} onChange={getUser} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" password={password} onChange={getUser} required />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}