import "./App.css";
import { increment, decrement, reset } from "./Action";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./store";
 store.subscribe(()=>console.log(store.getState())
 )
function App() {
  const mystate = useSelector((state) => state.mainFun.NUMOFCOUNER);
  const dispatch = useDispatch(); 

  return (
    <>
      <div className="counter-container">
        <div className="counter-box">
          <h1 className="counter-title">
            Counter: <span className="counter-value">{mystate}</span>
          </h1>

          <div className="button-group">
            <button
              className="button increment"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
              className="button decrement"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
            <button className="button reset" onClick={() => dispatch(reset())}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
