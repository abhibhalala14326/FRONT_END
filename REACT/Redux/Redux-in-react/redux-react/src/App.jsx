import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, Decrement, Reset } from "./Action";
import store from "./store";
 
 
function App() {
  const MyState = useSelector((state) => state.upnumber.COUNTERNUMOF);
    const dispatch = useDispatch()
  return (
    <>
      <div className="counter-container">
        <div className="counter-box">
          <h1 className="counter-title">
            Counter: <span className="counter-value">{MyState}</span>
          </h1> 

          <div className="button-group">
            <button
              className="button increment"
              onClick={() =>dispatch(increment()) }
            >
              Increment
            </button>
            <button
              className="button decrement"
              onClick={() => dispatch(Decrement())} 
            >
              Decrement
            </button>
            <button
              className="button reset"
              onClick={() => dispatch(Reset())} 
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
