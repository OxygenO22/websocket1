import React from 'react'
import { removeTodo, toggleTodo } from "../store/todoSlice";
import { useAppDispatch } from '../store/hook';

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoItemProps) => {

  const dispatch = useAppDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      {title}
      <button onClick={() => dispatch(removeTodo(id))}>X</button>
    </li>
  );
};

export default TodoItem
