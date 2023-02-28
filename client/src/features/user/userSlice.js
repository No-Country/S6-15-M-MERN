import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: 'unknown' };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userStatus(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const { userStatus } = userSlice.actions;

export default userSlice.reducer;
