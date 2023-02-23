import { createSlice } from "@reduxjs/toolkit";


const initialState = {register: [{name:'',email:'',password:''}]}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerFetched(state, action){
            return {
                ...state,
                register: action.payload
            }


        }

    }
})

export const { registerFetched } = registerSlice.actions
export default registerSlice.reducer