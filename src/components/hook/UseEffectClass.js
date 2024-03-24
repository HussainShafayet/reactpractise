import React, { Component } from 'react'

export default class UseEffectClass extends Component {
    state = {
        date : new Date(),
        count : 0
    }
    componentDidMount() {
        const { count } = this.state;
        document.title = `Title clicked ${count} times`;
        this.interval = setInterval(this.tick,1000);
    }
    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Title clicked ${count} times`;
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    handleClick = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    tick = () => {
        this.setState({
            date : new Date()
        })
    }
  render() {
      const { date, count } = this.state;
    return (
      <div>
          Timer : { date.toLocaleTimeString() } <br></br>
          <button type='button' onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
