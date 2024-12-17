import { createSlice } from "@reduxjs/toolkit";

type RegistrationState = {
  name: string;
  email: string;
  password: string;
}

const initialState: RegistrationState = {
  name: "",
  email: "",
  password: "",
}

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setRegistrationData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    clearRegistrationData: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
    }
  },
  
})

export const { setRegistrationData, clearRegistrationData } = registrationSlice.actions;

export default registrationSlice.reducer;