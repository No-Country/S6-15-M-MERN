import { createSlice } from '@reduxjs/toolkit';



const initialState = {jobs: [{"_id":"63f4c2d13174deb8a1c47222","service":"Electricista","title":"Fluyen los electrones","description":"Electricidad industrial y doméstica","jobImageUrl":"https://firebasestorage.googleapis.com/v0/b/db-demo-e7d23.appspot.com/o/OurServices%2Fbattlecreek-coffee-roasters-NfG4rXmceFM-unsplash.jpg?alt=media&token=d93201c4-9c7b-4fb1-af94-2b4e69137586","__v":0}],
                      users:[{"name": "maiten"}] }

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    jobsFetched(state, action) {
      return {
        ...state,
        jobs: action.payload,
      };
    },
    userFetched( state, action){
      return {
          ...state,
          users: action.payload
      }
  }

  },
});



export const { jobsFetched, userFetched } = jobsSlice.actions



export default jobsSlice.reducer
