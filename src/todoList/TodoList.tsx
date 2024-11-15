import React from 'react'
import TodoItem from './TodoItem';
import { useAppSelector } from '../store/hook';



const TodoList = () => {
  const todos = useAppSelector(state => state.todo.list)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          
        />
      ))}
    </ul>
  );
}

export default TodoList
