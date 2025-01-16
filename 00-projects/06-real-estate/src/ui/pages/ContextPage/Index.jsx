import { useState } from "react";

const ContextPage = () => {
  return (
    <>
      <ParentComponent />
    </>
  );
};

export default ContextPage;

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>ParentComponent</h2>
      <div>{count}</div>
      <ChildComponent setCount={setCount} />
    </>
  );
};

const ChildComponent = ({ setCount }) => {
  return (
    <>
      <h2>ChildComponent</h2>
      <GrandChildComponent setCount={setCount} />
    </>
  );
};

const GrandChildComponent = ({ setCount }) => {
  return (
    <>
      <h2>GrandChildComponent</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </>
  );
};
