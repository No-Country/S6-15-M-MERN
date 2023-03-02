import { createSlice } from "@reduxjs/toolkit";
import marta from '../../assets/marta.png'

const avatarURL = {name:'marta', path:marta}
const initialState = {user:[{"name":"unknown", avatarURL }]};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userStatus(state,action) {
            const payload = !action.payload.avatarURL.path? 
            {
            ...action.payload, 
           avatarURL: avatarURL} : action.payload
            return {
                ...state,
                user: payload

            }
        } }
})

export const { userStatus } = userSlice.actions;

export default userSlice.reducer;