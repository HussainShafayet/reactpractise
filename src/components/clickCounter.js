// import WithCounter from "./HOC/withCounter";
import React from "react";

export default class ClickCounter extends React.Component {
    // state = {
    //     count: 0
    // }
    // incrementCount = () => {
    //     this.setState(
    //         (prevState) => ({count: prevState.count + 1}))
    // };
    render(){
        const { count,incrementCount } = this.props;
        return (
            <div>
                <button className='btn btn-info' onClick={incrementCount}>Item clicked {count} times</button>
            </div>
        )
    }
}

// export default WithCounter(clickCounter);