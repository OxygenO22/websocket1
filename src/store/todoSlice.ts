import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const fetchTodos = createAsyncThunk<TodoType[], undefined, {rejectValue: string}>(
  "todo/fetchTodos",
  async (_, {rejectWithValue}) => {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    
    if (!response.ok) return rejectWithValue("Failed to fetch todos");
    
   return await response.json();
  }
)

export const deleteTodo = createAsyncThunk<string, string, {rejectValue: string}>(
  "todo/deleteTodo",
  async (id: string, { rejectWithValue }) => {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
    
    if (!response.ok) return rejectWithValue("Failed to delete todo");
    
    return id;
  }
)

export const toggleStatus = createAsyncThunk<TodoType, string, {rejectValue: string, state: {todo: TodosState}}>(
  'todo/toggleStatus',
  async (id: string, {rejectWithValue, getState}) => {
    const todo = getState().todo.list.find(todo => todo.id === id)

    if (!todo) return rejectWithValue("Todo not found")
   
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed:!todo.completed }),
    })

    if (!response.ok) return rejectWithValue("Failed to change status todo");

    return (await response.json()) as TodoType
  }
)

export const addNewTodo = createAsyncThunk<TodoType, string, {rejectValue: string}>(
  'todos/addNewTodo',
  async (title: string, { rejectWithValue}) => {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, userId: 1, completed: false }),
    });
    
    if (!response.ok) return rejectWithValue("Failed to add new todo");

    return (await response.json()) as TodoType
     
  }
)

const setError = (state: TodosState, action: any) => {
  state.status = 'rejected'
  state.error = action.payload;
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<TodoType>) => {
    //   state.list.push(action.payload);
    // },
    // removeTodo: (state, action: PayloadAction<string>) => {
    //   state.list = state.list.filter((todo) => todo.id!== action.payload);
    // },
    // toggleTodo: (state, action: PayloadAction<string>) => {
    //   const toggledTodo = state.list.find(todo => todo.id === action.payload)
    //   if (toggledTodo){
    //   toggledTodo.completed = !toggledTodo.completed}
    // },
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
      .addCase(fetchTodos.rejected, setError)
      .addCase(addNewTodo.pending, (state) => {
          state.status = 'loading'
          state.error = null;
        })
      .addCase(addNewTodo.fulfilled, (state, action) => {
          state.status = 'resolved'
          state.list.push(action.payload);
        })
      .addCase(addNewTodo.rejected, setError)
      .addCase(deleteTodo.pending, (state) => {
        state.status = 'loading'
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.list = state.list.filter((todo) => todo.id!== action.payload)
      })
      .addCase(deleteTodo.rejected, setError)
      .addCase(toggleStatus.pending, (state) => {
        state.status = 'loading'
        state.error = null;
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        state.status = 'resolved'
        const toggledTodo = state.list.find(todo => todo.id === action.payload.id)
        if (toggledTodo){
        toggledTodo.completed = !toggledTodo.completed}
      })
      .addCase(toggleStatus.rejected, setError)
  },
})




export default todoSlice.reducer;