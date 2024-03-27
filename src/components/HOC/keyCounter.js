import React, {useState} from 'react'

const KeyCounter = (OriginalComponent) => {
  
//    class keyCounter extends React.Component {
//        constructor(props){
//            super(props);
//            this.state = {
//                count: 0
//            }
//        }
//        handleInput = (e)=>{
//            this.setState((prevState)=>{
//                return {count: e.target.value.length};
//            })
//        }
//    render() {
//        const {count} = this.state;
//      return (
//        <OriginalComponent count={count} handleInput={this.handleInput} />
//      )
//    }
//  }

 function KeyCounter() {
    const [count, setCount] = useState(0);
    const handleInput = (e)=>{
        setCount(e.target.value.length);
    }
  return (
    <OriginalComponent count={count} handleInput={handleInput} />
  )
}

  return KeyCounter;
  
}

export default KeyCounter;