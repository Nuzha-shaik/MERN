import React, { useReducer } from 'react'

const initialValue = { count: 0 };
const Reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case "reset":
            return initialValue;
        default:
            return { count: state.count };
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(Reducer, initialValue);
  return (
    <div>
     <h1>{state.count}</h1>
     <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
     <button onClick={() => dispatch({ type: 'reset' })}>🔃</button>
     <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  )
}

export default UseReducer