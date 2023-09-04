import { useState } from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronsDown,
  ChevronDown,
  Hash,
  RefreshCcw,
} from "react-feather";

function App() {
  const [count, setCount] = useState(0);
  
  // Function to increase the count by 1
  const incrementByOne = () => {
    setCount(count + 1);
  };

  // Function to increase the count by 10
  const incrementByTen = () => {
    setCount(count + 10);
  };

  // Function to reset the count to zero
  const resetCount = () => {
    setCount(0);
  };

  // Function to set the count to a random number between 1 and 100
  const setRandomCount = () => {
    const randomCount = Math.floor(Math.random() * 100) + 1;
    setCount(randomCount);
  };

  // Function to decrease the count by 10
  const decrementByTen = () => {
    setCount(count - 10);
  };

  // Function to decrease the count by 1
  const decrementByOne = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="counter">
        <h1>Current value:</h1>
        <h1 className="count">{count}</h1>
        <div className="icons-container">
          <ChevronUp className="icon" onClick={incrementByOne} />
          <ChevronsUp className="icon" onClick={incrementByTen} />
          <RefreshCcw className="icon" onClick={resetCount} />
          <Hash className="icon" onClick={setRandomCount} />
          <ChevronsDown className="icon" onClick={decrementByTen} />
          <ChevronDown className="icon" onClick={decrementByOne} />
        </div>
      </div>
    </>
  );
}

export default App;
