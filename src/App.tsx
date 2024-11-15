import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./todoList/TodoList";
import MyInput from "./myInput/MyInput";
import { addTodo, fetchTodos } from './store/todoSlice'
import { useAppDispatch, useAppSelector } from "./store/hook";



const App = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const {status, error} = useAppSelector(state => state.todo)

  const addTask = () => {
    dispatch(addTodo(title))
    setTitle("")
  };  

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div className="App">
      <MyInput title={title} handleInput={setTitle} addTodo={addTask} />

      {status === "loading" && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <TodoList />
    </div>
  );
};

export default App;
