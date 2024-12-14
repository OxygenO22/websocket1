import { createSlice } from "@reduxjs/toolkit";

type PopUpState = {
  isOpen: boolean;
  title: string;
  content: string;
}

const initialState: PopUpState = {
  isOpen: false,
  title: '',
  content: '',
}

const popUpSlice = createSlice({
  name: "popUp",
  initialState,
  reducers: {
    openPopUp: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
    closePopUp: (state) => {
      state.isOpen = false;
      state.title = "";
      state.content = "";
    }
  }
})

export const { openPopUp, closePopUp } = popUpSlice.actions;

export default popUpSlice.reducer