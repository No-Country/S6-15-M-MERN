import { configureStore } from '@reduxjs/toolkit';

import jobsReducer from '../features/jobs/jobsSlice';
import userReducer from '../features/user/userSlice';
import professionalsReducer from '../features/professionalsSlice/professionalsSlice';
<<<<<<< HEAD
import profileReducer from '../features/profile/ProfileSlice';

=======
import profileReducer from "../features/profile/ProfileSlice";
>>>>>>> 6b729dc79f75447f23e307c86018f0a4bf67237c

/* import register from '../features/registerSlice/registerSlice'; */

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    professionals: professionalsReducer,
<<<<<<< HEAD
    profile: profileReducer,
=======
    profile: profileReducer
>>>>>>> 6b729dc79f75447f23e307c86018f0a4bf67237c
  },
});
