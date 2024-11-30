import React from "react";

// Props (properties)
// JSX (JavaScript XML - extended javascript)
// useState hook (for state management - variables - trigger re-render (virtual DOM))

const Counter = (props) => {
  // const Counter = ({ title }) => {
  //   const counterTitle = props.title;
  const { title } = props;
  const counterState = React.useState(0);
  const count = counterState[0];
  const setCount = counterState[1];

  //   console.log(counterState);
  console.log("count outer", count);

  //   let count = 0;
  //   console.log(window.document)

  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => {
      console.log("prev", prev);
      return prev + 1;
    });
    setCount((prev) => {
      console.log("prev 2", prev);
      return prev + 1;
    });

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    console.log("count inner", count);
    return count;
  };

  return (
    <div
      style={{
        border: "1px solid grey",
        padding: "10px",
        margin: "10px",
        backgroundColor: "azure",
        borderRadius: "8px",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h2>{title}</h2>
      <span>{count}</span>
      <button
        style={{
          cursor: "pointer",
        }}
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
