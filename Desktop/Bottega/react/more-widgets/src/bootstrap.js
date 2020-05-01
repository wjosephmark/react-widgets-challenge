import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter"

import App from "./components/app";
import EvenOrOdd from "./components/pages/even-or-odd"
import FizzBuzz from "./components/pages/fizz-buzz"
import ChangeSize from "./components/pages/change-size"
import ChangePosition from "./components/pages/change-position"
import ChangeColor from "./components/pages/change-color"
import BirthYear from "./components/pages/birth-year"

import "./style/main.scss";

const routes = {
  "/": () => <App />,
  "/evenorodd": () => <EvenOrOdd />,
  "/fizzbuzz": () => <FizzBuzz />,
  "/changesize": () => <ChangeSize />,
  "/changeposition": () => <ChangePosition />,
  "/changecolor": () => <ChangeColor />,
  "/birthyear": () => <BirthYear />,
}

function Main() {

  return(
    <div>
      <div className="navbar">
        <div className="link">
          <A href="/">Home</A>
        </div>
        <div className="link">
        <A href="/evenorodd">Even or Odd</A>
        </div>
        <div className="link">
        <A href="/fizzbuzz">Fizz Buzz</A>
        </div>
        <div className="link">
        <A href="/changesize">Change Size</A>
        </div>
        <div className="link">
        <A href="/changeposition">Change Position</A>
        </div>
        <div className="link">
        <A href="/changecolor">Change Color</A>
        </div>
        <div className="link">
        <A href="/birthyear">Birth Year</A>
        </div>
      </div>
      {useRoutes(routes)}
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"))