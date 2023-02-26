import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from '../features/jobs/jobsSlice';
import userReducer from '../features/user/userSlice';


export default configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
  },
});