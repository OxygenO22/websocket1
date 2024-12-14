import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import popUpReducer from './popUpSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    popUp: popUpReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;