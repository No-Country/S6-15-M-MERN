import { createSlice } from '@reduxjs/toolkit';



export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    registeredUser: [],
  },
  reducers: {
    userFetched: (state, action) => {
      state.user = action.payload;
      console.log(state.user, "EL ESTADO")
    },
  },
});


export default registerSlice.reducer;
export const { userFetched } = registerSlice.actions;
