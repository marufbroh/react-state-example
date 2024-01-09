import React, { useState } from "react";

const CounterWithFuncComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)} className="btn">
        {count}
      </button>
    </div>
  );
};

export default CounterWithFuncComponent;
