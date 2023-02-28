import { createSlice } from "@reduxjs/toolkit";
import profile from '../../assets/profile.jpeg'

const avatarURL = profile

const initialState = {user:[{"name":"unknown", avatarURL }]};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userStatus(state,action) {
            const payload = !action.payload.avatarURL? {...action.payload, ...action.payload.avatarURL = avatarURL} : action.payload
            console.log( action.payload , 'EL ESATDO')
            return {
                ...state,
                user: action.payload,
                
            }
        }
    }
})

export const { userStatus } = userSlice.actions;

export default userSlice.reducer;
