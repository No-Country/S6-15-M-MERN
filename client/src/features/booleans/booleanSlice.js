import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invalidLogin: false,
  invalidRegister: false,
  notLogged: false,
  cambios: false
};

const booleanSlice = createSlice({
  name: "booleans",
  initialState,
  reducers: {
    loginReducer(state, action) {
      return {
        ...state,
        invalidLogin: action.payload,
      };
    },
    registerReducer(state, action) {
      return {
        ...state,
        invalidRegister: action.payload,
      };
    },
    mustLoginReducer(state, action) {
      return {
        ...state,
        notLogged: action.payload,
      };
    },
    cambiosReducer(state, action){
      return {
        ...state,
        cambios: action.payload,
      };
    }
  },
});

export const { loginReducer, registerReducer, mustLoginReducer, cambiosReducer } = booleanSlice.actions;

export default booleanSlice.reducer;
