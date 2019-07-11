import * as React from "react";
import * as ReactDOM from "react-dom";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import Counter from "./components/Counter";
import StoredCounter from "./components/StoredCounter";
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Counter name="不带redux的counter"/>
    <hr/>
    <TodoItem title="函数组件的ts示例"/>
    <hr/>
    <StoredCounter name="带有redux的counter"/>
    <hr/>
    <TodoInput />
  </Provider>,
  document.getElementById("root")
);
