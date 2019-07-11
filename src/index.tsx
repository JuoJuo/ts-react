import * as React from "react";
import * as ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import Counter from "./components/Counter";

ReactDOM.render(
  <>
    <Counter name="lrj"/>
    <hr/>
    <TodoItem title="函数组件"/>
    <hr/>
    <TodoInput />
  </>,
  document.getElementById("root")
);
