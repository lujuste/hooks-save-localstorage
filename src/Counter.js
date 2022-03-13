import React, { useEffect, useState } from 'react';

// const storeStateInLocalStorage = (count) => {
//   localStorage.setItem('counterState', JSON.stringify({ count }));
//   console.log(localStorage, 'local');
// };

// const useLocalStorage = (initialState, key) => {
//   const get = () => {
//     const storage = localStorage.getItem(key);
//     console.log(storage, 'localStore');
//     if (storage) return JSON.parse(storage)[value];
//     return initialState;
//   };

//   const [value, setValue] = useState(get());

//   useEffect(() => {
//     localStorage.getItem(key, JSON.stringify({ value }));
//   }, [value]);

//   return [value, setValue];
// };

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);
  const countRef = React.useRef();
  countRef.current = count;
  let message = '';
  if (countRef.current >= 10)
    message = 'Hi, our count is higher or equal than 10 :)';
  if (countRef.current <= 10)
    message = 'Hi, our count is lower or equal than 10 :)';

  const increment = () => {
    setCount((c) => {
      if (c >= max) return c;

      return c + step;
    });
  };

  const decrement = () => {
    setCount((c) => {
      if (c <= 0) return 0;
      return c - 1;
    });
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Count: ${count}`);
    }, 3000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="Counter">
      <p> {message} </p>
      <p className="count"> {count} </p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
