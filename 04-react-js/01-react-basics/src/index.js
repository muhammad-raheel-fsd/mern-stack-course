import ReactDOM from "react-dom/client";
import App from "./App";
const main = document.getElementById("root");
const root = ReactDOM.createRoot(main);

// root.render(
//     <Card />
//     <Form />
// );
// root.render(
//   <div>
//     <Card />
//     <Form />
//   </div>
// );
// root.render(<Form />);

root.render(<App />);
