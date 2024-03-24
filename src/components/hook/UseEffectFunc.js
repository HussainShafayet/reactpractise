import { useState,useEffect } from 'react'

export default function useEffectFunc() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        console.log('useEffectFunc title updated');
        document.title = `Title clicked ${count} times`;
    }, [count]);
    useEffect(() => {
       const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    },[]);
    const handleClick = () => {
        setCount((count) => count + 1);
    }
    const tick = () => {
        setDate(new Date());
    }
    return (
    <div>
        Timer : { date.toLocaleTimeString() } <br></br>
        <button type='button' onClick={handleClick}>Click</button>
    </div>
  )
}
