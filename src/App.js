import { useState } from 'react';
import './App.css';

const IncrementClick = (props) => {
  const onClickIncrement = () => {
    props.setCount(props.count + 1);
    console.log(props.count);
  };
  return (
    <button className="button increment" onClick={onClickIncrement}>
      +
    </button>
  );
};

const DecrementClick = (props) => {
  const onClickDecrement = () => {
    props.setCount(props.count - 1);
    console.log(props.count);
  };
  return (
    <button className="button decrement" onClick={onClickDecrement}>
      -
    </button>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="title">Counter App</h1>
      <div className="counter-container">
        <DecrementClick count={count} setCount={setCount} />
        <div className="counter-value">{count}</div>
        <IncrementClick count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;
