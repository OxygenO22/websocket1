import React from 'react'
import { deleteTodo, toggleStatus } from "../store/todoSlice";
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
        onChange={() => dispatch(toggleStatus(id))}
      />
      {title}
      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </li>
  );
};

export default TodoItem
