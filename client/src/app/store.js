import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from '../features/jobs/jobsSlice';
import userReducer from '../features/user/userSlice';
import professionalsReducer from '../features/professionalsSlice/professionalsSlice';
import profileReducer from "../features/profile/ProfileSlice";
import booleanReducer from "../features/booleans/booleanSlice"
import  cambiosReducer  from '../features/booleans/booleanSlice';

/* import register from '../features/registerSlice/registerSlice'; */

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    professionals: professionalsReducer,
    profile: profileReducer,
    modales: booleanReducer,
    cambios: cambiosReducer
  },
});
