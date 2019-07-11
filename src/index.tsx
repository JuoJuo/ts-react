import * as React from "react";
import * as ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import Counter from "./components/Counter";

ReactDOM.render(
  <>
    <Counter />
    <TodoInput />
    <TodoItem />
  </>,
  document.getElementById("root")
);
