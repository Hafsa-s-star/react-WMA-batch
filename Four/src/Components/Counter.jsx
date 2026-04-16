// import { useRef } from "react";  OPTION 1 (USEREF)

// function Counter() {
//   const countRef = useRef(0);

//   const handleClick = () => {
//     countRef.current++;
//     console.log(countRef.current);
//   };

//   return <button onClick={handleClick}>Click</button>;
// }

import { useReducer } from "react";    //USEREDUCER

const initialState = { count: 0 };                    

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>
    </>
  );  
}

export default Counter