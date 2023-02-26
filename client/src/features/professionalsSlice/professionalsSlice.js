import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  professionals: [
    {
      _id: '63f61815a99b2504858961ed',
      name: 'Maiten',
      email: 'maiten@gmail.com',
      password: '$2a$08$0y6w3h7HZFFpPcmW4/ocm.NBWM5qhB0hbfvX4k0fu9qVI8L5DOdjC',
      createdAt: '2023-02-22T13:26:45.992Z',
      updatedAt: '2023-02-22T20:07:17.335Z',
      avatarURL: '',
      professional: true,
    },
  ],
};

<<<<<<< HEAD
export const professionalsSlice = createSlice({
  name: 'professionals',
  initialState,
  reducers: {
    professionalsFetched(state, action) {
      state.professional = action.payload;
      console.log(state.professional, 'EL ESTADO DE LOS PROFESIONALES');
    },
  },
});

export default professionalsSlice.reducer;
export const { professionalsFetched } = professionalsSlice.actions;
=======
const professionalsSlice = createSlice({
  name: "professionals",
  initialState,
  reducers: {
    professionalsFetched(state, action){
      return{
        ...state,
        professionals: action.payload
      }
    }
  }
})

export const { professionalsFetched} = professionalsSlice.actions;

export default professionalsSlice.reducer;

>>>>>>> 1749856c14e021a09ec5db5434930aac6ca37577
