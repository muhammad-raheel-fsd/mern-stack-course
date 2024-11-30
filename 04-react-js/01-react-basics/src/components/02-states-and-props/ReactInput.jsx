import React from "react";

const ReactInput = () => {
  const [name, setName] = React.useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <span>{name}</span>
    </div>
  );
};

export default ReactInput;
