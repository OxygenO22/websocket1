import { useState } from "react";
import "./App.css";
import TodoList from "./todoList/TodoList";
import MyInput from "./myInput/MyInput";
import { addTodo } from './store/todoSlice'
import { useAppDispatch } from "./store/hook";



const App = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addTodo(title))
    setTitle("")
  };  

  return (
    <div className="App">
      <MyInput title={title} handleInput={setTitle} addTodo={addTask} />
      <TodoList />
    </div>
  );
};

export default App;
