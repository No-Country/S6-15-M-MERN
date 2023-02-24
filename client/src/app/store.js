import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from '../features/jobs/jobsSlice';
import register from '../features/registerSlice/registerSlice';

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    register,
  },
});
