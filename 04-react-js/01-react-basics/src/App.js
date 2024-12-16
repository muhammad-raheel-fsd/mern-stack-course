import React from "react";
import Counter from "./components/02-states-and-props/Counter";
import ReactInput from "./components/02-states-and-props/ReactInput";
import DebounceInput from "./components/04-useeffect-practice/DebounceInput";
import { Link, NavLink, Route, Routes } from "react-router";
import Card from "./components/01-fundamentals-and-components/Card";
import Form from "./components/01-fundamentals-and-components/Form";
import Components from "./components/Index";

// /form (absolute path)
// form (relative)

const App = () => {
  return (
    <React.Fragment>
      <div id="navigation">
        {/* <a href="/">Counter</a>
        <a href="/react-input">React Input</a>
        <a href="/debounce-input">Debounce Input</a>
        <a href="/components">Components</a>
        <a href="/components/form">Form</a>
        <a href="/components/card">Card</a> */}

        <Link to="/">Counter</Link>
        <Link to="/react-input">React Input</Link>
        <NavLink
          to="/debounce-input"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Debounce Input
        </NavLink>
        <Link to="/components">Components</Link>
        <Link to="/components/form">Form</Link>
        <Link to="/components">Card</Link>

        <NavLink
          to="/components"
          className={(arg) => {
            // console.log("arg ===========>", arg);
          }}
        >
          Card
        </NavLink>
      </div>
      <Routes>
        <Route index element={<Counter title="Title of the counter" />} />
        {/* <Route path="/" element={<Counter title="Title of the counter" />} /> */}
        <Route path="/react-input"  element={<ReactInput />}/>
        <Route path="/debounce-input" element={<DebounceInput />} />

        <Route path="components">
          <Route index element={<Card />} />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
