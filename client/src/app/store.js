import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from '../features/jobs/jobsSlice';
import userReducer from '../features/user/userSlice';
import register from '../features/registerSlice/registerSlice';

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
  },
});