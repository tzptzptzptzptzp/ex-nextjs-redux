import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((count) => {
      if (count < 10) {
        return count + 1;
      } else {
        return count;
      }
    });
  };
  const handleDecrement = () => {
    setCount((count) => {
      if (count > 1) {
        return count - 1;
      } else {
        return count;
      }
    });
  };
  return (
    <div className="flex justify-center gap-4 w-full">
      <button onClick={handleDecrement}>ー</button>
      <div>
        <p>{count}</p>
      </div>
      <button onClick={handleIncrement}>＋</button>
    </div>
  );
};
