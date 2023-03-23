import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name: 'Mana Khare'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;