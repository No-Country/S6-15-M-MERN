import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from '../features/jobs/jobsSlice';
import registrerReducer from '../features/registerSlice/registerSlice';

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    register:registrerReducer,
    
  },
});
