const ChildComponent = ({ count }: { count: number }) => {
  return (
    <div className="border border-green-500 p-10 m-10">
      <h1>Count = {count}</h1>
    </div>
  );
};

export default ChildComponent;
