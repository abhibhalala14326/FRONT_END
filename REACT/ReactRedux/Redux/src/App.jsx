import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { toy } from "./Action";

function App() {
  const state = useSelector(state => state.toys.NumofToy); 
  const dispatch = useDispatch();

  return (
    <>
      <p>Number of Toys: {state}</p>
      <button onClick={() => dispatch(toy())}>Click</button>
    </>
  );
}

export default App;
