import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from '../features/jobs/jobsSlice';
import userReducer from '../features/user/userSlice';
import professionalsReducer from '../features/professionalsSlice/professionalsSlice';
import profileReducer from '../features/profile/ProfileSlice';



export default configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    professionals: professionalsReducer,
    profile: profileReducer,
  },
});
