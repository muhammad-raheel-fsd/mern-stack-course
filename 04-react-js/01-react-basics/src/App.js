import React from "react";
import Counter from "./components/02-states-and-props/Counter";
import ReactInput from "./components/02-states-and-props/ReactInput";
// import Card from "./components/01-fundamentals-and-components/Card";
// import Form from "./components/01-fundamentals-and-components/Form";

const App = () => {
  return (
    // <div>
    //   <Card />
    //   <Form />
    // </div>

    // React Fragment
    // <>
    //   <Card />
    //   <Form />
    // </>

    <React.Fragment>
      {/* <Card /> */}
      {/* <Form /> */}
      <Counter title="Title of the counter" />
      <ReactInput />
    </React.Fragment>
  );
};

export default App;
