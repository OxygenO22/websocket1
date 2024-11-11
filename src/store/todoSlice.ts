import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
}

type TodosState = {
  list: TodoType[]
}

const initialState: TodosState = {
  list: [],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({ id: new Date().toISOString(), title: action.payload, completed: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((todo) => todo.id!== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const toggledTodo = state.list.find(todo => todo.id === action.payload)
      if (toggledTodo){
      toggledTodo.completed = !toggledTodo.completed}
    },
  },
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;