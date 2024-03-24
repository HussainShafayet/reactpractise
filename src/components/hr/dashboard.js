import React, { Component } from 'react';
import Calculator from '../lifting-state/calculator';
import Section from '../Section';
import ThemeContext from '../../contexts/themeContext';
import TodoClass from '../hook/TodoClass';
import Todo from '../hook/Todo';
import UseEffectClass from '../hook/UseEffectClass';
import UseEffectFunc from '../hook/UseEffectFunc';
import FunctionComponent from '../FunctionComponent';
import ClassComponent from '../ClassComponent';


export default class Dashboard extends Component {
  state = {
    theme : 'dark'
  }
  switchTheme = () => {
    this.setState({
      theme : this.state.theme === 'dark' ? 'light' : 'dark'
    })
  }
  people = [{id:0, name:'Rahim'},{id:1, name:'Tamim'},{id:2, name:'Riad'}]
  render() {
    const { theme } = this.state;
    return (
      <div>
        {/* <Calculator /> */}
{/*         
        <ThemeContext.Provider value={{theme,switchTheme:this.switchTheme}}>
          <Section />
        </ThemeContext.Provider> */}
        {/*<TodoClass />
        <Todo />
        <UseEffectClass />
        <UseEffectFunc />*/}
        <FunctionComponent values={this.people} />
        {/*<ClassComponent value="class props" />*/}
      </div>
    )
  }
}
