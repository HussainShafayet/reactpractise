import Counter from "./Counter";
import HoverCounter from "./hoverCounter";
import ThemeContext from "../contexts/themeContext";

// export default function Content() {
//   return (
//     <div>
//       <span>this is Content</span>
//       <Counter
//           render={(count, incrementCount) => {
//             return <ThemeContext.Consumer>
//               {({theme,switchTheme}) => (
//                 <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
//               )}
//             </ThemeContext.Consumer>
//           }}
//         />
//     </div>
//   )
// }
import React, { Component } from 'react'

export default class Content extends Component {
  componentDidMount = () => {
    console.log(this.context);
  }
  render() {
   const { theme, switchTheme } = this.context;
    return (
      <div>
      <span>this is Content</span>
       <Counter>
          {(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
          )}
        </Counter>
    </div>
    )
  }
}
Content.contextType = ThemeContext;
