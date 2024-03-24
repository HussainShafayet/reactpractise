import React, { useEffect, useReducer } from 'react';

const initialState = {
    isLoading: true,
    result: {},
    isError: ''
}
const reducer = (state, action) => {
    switch(action.type){
        case 'Success':
            return {
                isLoading: false,
                result: action.result,
                isError: ''
            }
        case 'Error':
            return {
                isLoading: false,
                result: {},
                isError: 'Something went wrong!'
            }
        default:
            return state;
    }
}

export default function GetPost2() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "Success", result: data });
        })
        .catch((error) => {
          dispatch({ type: "Error" });
        });
    }, []);
  return (
    <div>
        GetPost2
        {state.isLoading ? <p>Loading...</p> : <p>{state.result.title}</p>}
        {state.isError || null}
    </div>
  )
}
