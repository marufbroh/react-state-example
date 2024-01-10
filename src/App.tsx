import { useState } from "react";
// import CounterWithClass from "./components/CounterWithClassComponent";
import CounterWithFuncComponent from "./components/CounterWithFuncComponent";
import UserInfoWithUseState from "./components/UserInfoWithUseState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-purple-500 p-10 m-10">
      {/* <h1>Count = {count}</h1> */}
      {/* <CounterWithClass /> */}
      {/* <CounterWithFuncComponent count={count} setCount={setCount} /> */}
      <UserInfoWithUseState />
    </div>
  );
}

export default App;
