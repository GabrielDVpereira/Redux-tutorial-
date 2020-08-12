import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, incrementByValueAction } from "./actions/couter";
import { isLoggedAction } from "./actions/isLogged";

function App() {
  const count = useSelector((state) => state.counterStore);
  const isLogged = useSelector((state) => state.isLoggedStore);
  const dispatch = useDispatch();
  return (
    <>
      <div className="App">Redux tutorial</div>
      <p>count {count}</p>
      <p>isLogged {String(isLogged)}</p>
      <button
        onClick={() => {
          dispatch(incrementAction());
        }}
      >
        Increment by 1
      </button>
      <button
        onClick={() => {
          dispatch(incrementByValueAction(10));
        }}
      >
        Increment by 10
      </button>

      <button
        onClick={() => {
          dispatch(isLoggedAction());
        }}
      >
        login
      </button>
    </>
  );
}

export default App;
