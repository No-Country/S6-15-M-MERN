import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    invalidLogin: false,
    invalidRegister: false

}

const booleanSlice = createSlice({
  name: 'booleans',
  initialState,
  reducers: {
    loginReducer(state, action) {
      return {
        ...state,
        invalidLogin: action.payload,
      };
    },
    registerReducer( state, action){
      return {
          ...state,
          invalidRegister: action.payload
      }
  }

  },
});



export const { loginReducer, registerReducer } = booleanSlice.actions



export default booleanSlice.reducer
