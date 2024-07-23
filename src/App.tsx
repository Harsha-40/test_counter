import { useState } from 'react';

export default function CounterApp() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>Counters that update separately</h1>
      <CounterButton count={count1} setCount={setCount1} />
      <CounterButton count={count2} setCount={setCount2} />
    </div>
  );
}

function CounterButton({ count, setCount }) {
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
