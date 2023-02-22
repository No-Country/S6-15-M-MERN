import { configureStore } from "@reduxjs/toolkit";

import jobsReducer from "../features/jobs/jobsSlice"


export default configureStore({
    reducer: {
        jobs: jobsReducer
    }
})