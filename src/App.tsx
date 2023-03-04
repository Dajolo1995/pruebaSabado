import { useState } from "react";
import "./App.css";
import Index from "./router/Index";
import UseState from "./context/useState";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <UseState>
      <Index />
    </UseState>
  );
};

export default App;
