import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
  user: [
    {
    avatarURL: "",
      city: "",
      createdAt: "",
      email: "",
      job: "",
      name: "",
      password: "",
      professional: true,
      updatedAt: "",
      _id: "",
      avatarURL: ""
    },
  ],
}
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileFetched(state, action) { 
      return {
        ...state,
        profile: action.payload,
      };
    },
  },
});

export const { profileFetched } = profileSlice.actions;

export default profileSlice.reducer;

