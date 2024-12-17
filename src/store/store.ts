import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import popUpReducer from './popUpSlice'
import authorisationReducer from './authorisationSlice'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    popUp: popUpReducer,
    authorisation: authorisationReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;