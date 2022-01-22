import React from "react";
import './styles/index.css'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, increaseBy20 } from "./redux/counterSlice";


function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
      <div>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <comment>{count}</comment>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(increaseBy20(20))}>+ 20</button>
        
      </div>
    )
}

export default App;