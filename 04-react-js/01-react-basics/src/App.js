import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";

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
      <Card />
      <Form />
    </React.Fragment>
  );
};

export default App;
