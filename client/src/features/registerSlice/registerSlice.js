import { createSlice } from '@reduxjs/toolkit';

export const registerSlice = createSlice({
  name: 'register',
  initialState: {
    registeredUser: [],
  },
  reducers: {
    setRegisterUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default registerSlice.reducer;
export const { setRegisterUser } = registerSlice.actions;
