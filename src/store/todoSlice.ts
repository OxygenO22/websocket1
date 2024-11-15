import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoType = {
  id: string;
  title: string;
  completed: boolean;
}

type TodosState = {
  list: TodoType[]
  status: null | string
  error: null | string
}

const initialState: TodosState = {
  list: [],
  status: null,
  error: null,
}

export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
      
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      
      const data = await response.json();
      return data;
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
      dispatch(removeTodo(id))
      
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)



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
  extraReducers: (builder) => {
    builder
     .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
        state.error = null;
      })
     .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.list = action.payload;
      })
     .addCase(fetchTodos.rejected, (state, action: any) => {
        state.status = 'rejected'
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = 'loading'
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = 'resolved'
      })
     .addCase(deleteTodo.rejected, (state, action: any) => {
        state.status = 'rejected'
        state.error = action.payload;
      })
  },
})


export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;