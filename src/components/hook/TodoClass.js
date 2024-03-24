import React, { Component } from 'react'

export default class TodoList extends Component {
    state = {
        todo: '',
        warning: null
    }
    handleTodo = (e)=>{
        const inputValue = e.target.value;
        console.log(inputValue);
        const warning = inputValue.includes('.js') ? "Don't use .js extension" : null;

        this.setState({
            todo: inputValue,
            warning
        })

    }
  render() {
      const { todo, warning } = this.state;
    return (
      <div>
          <input type="text" value={todo} placeholder='Input todo~' onInput={this.handleTodo}/> <br></br>
          <span>{todo}</span><br></br>
          <span>{warning || 'Good Jobs!'}</span>
      </div>
    )
  }
}
