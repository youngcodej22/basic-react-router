import React from "react";
import useRouter from "./hooks/useRouter";
import Tab from "./components/Tab";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

const App = () => {
  const { route, push } = useRouter();

  const Component = (push: () => void) => {
    switch (route) {
      case "/":
        return <Home push={push} />;
      case "/about":
        return <About push={push} />;
      default:
        return <Home push={push} />;
    }
  };

  return (
    <div className="container">
      <nav>
        <ul>
          <Tab navigate="/" push={push}>
            Home
          </Tab>
          <Tab navigate="/about" push={push}>
            About
          </Tab>
        </ul>
      </nav>
      {Component(push)}
    </div>
  );
};

export default App;
