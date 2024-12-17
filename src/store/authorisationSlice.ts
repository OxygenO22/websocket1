import { createSlice } from "@reduxjs/toolkit";

type AuthorisationState = {
  token: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthorisationState = {
  token: null,
  isAuthenticated: false,
}

const authorisationSlice = createSlice({
  name: "authorisation",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated =!!action.payload;
    },
    removeToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
})

export const { setToken, removeToken } = authorisationSlice.actions;

export default authorisationSlice.reducer;