import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/todoList/TodoList";
import MyInput from "./components/myInput/MyInput";
import { addNewTodo, fetchTodos } from './store/todoSlice';
import {openPopUp, closePopUp} from './store/popUpSlice'
import { useAppDispatch, useAppSelector } from "./store/hook";
import { PopUp } from "./components/popUp/PopUp";



const App = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const {status, error} = useAppSelector(state => state.todo)
  const isOpen = useAppSelector(state => state.popUp.isOpen)

  const addTask = () => {
    dispatch(addNewTodo(title))
    setTitle("")
  };  

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const openClosePopUp = () =>
    isOpen
      ? dispatch(closePopUp())
      : dispatch(openPopUp({ title: "Hi", content: "A am a PopUp" }));

  return (
    <div className="App">
      <MyInput title={title} handleInput={setTitle} addTodo={addTask} />

      {status === "loading" && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <TodoList />
      <div>
        <button onClick={openClosePopUp}>{isOpen ? 'Close popUp' : 'Open popUp'}</button>
        {isOpen && <PopUp />}
      </div>
    </div>
  );
};

export default App;
