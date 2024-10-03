import React, {useContext} from 'react'
import Acontext from './A';

const B = () => {
    const {count} = useContext(Acontext);
    console.log('const', count);
    
  return (
    <div>
        {/*<ThemeConsumer >
        {({color})=>{
            return (<div>
              Welcome {color} 
            </div>)
          }}
          {({color})=>{
            return (
                <>
                   color {color}
                </>
            )
          }}
        </ThemeConsumer>*/}


    </div>
  )
}

export default B;