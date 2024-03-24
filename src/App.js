import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Class_practise from './components/Practise_class'
import Practise_function from './components/Practise-function'
import Data from './Data.json'
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


function App() {
  /* let items=[];
  for (let x=0; x<Data.length;x++ ){
    items.push(<Practise_function name={Data[x].Name} age={Data[x].age} />)
  } */
  let items=[]
  items=Data.map((item,index)=> <Practise_function key={index} name={item.Name} and age={item.age} />);

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
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={ <Dashboard />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


