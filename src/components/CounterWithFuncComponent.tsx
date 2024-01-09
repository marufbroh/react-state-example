import ChildComponent from "./ChildComponent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncComponent = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-red-500 p-10 m-10">
      <button onClick={() => setCount((count) => count + 1)} className="btn">
        {count}
      </button>
      <ChildComponent count={count} />
    </div>
  );
};

export default CounterWithFuncComponent;
