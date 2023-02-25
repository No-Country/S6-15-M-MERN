import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from '../features/jobs/jobsSlice';
import registrerReducer from '../features/registerSlice/registerSlice';
import professionalsReducer from '../features/professionalsSlice/professionalsSlice';

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    register: registrerReducer,
    professionals: professionalsReducer,
  },
});
