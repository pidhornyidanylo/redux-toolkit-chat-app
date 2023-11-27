import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersApi } from "../API/users";
import { InterUser } from "../components/User/InterUser";

interface InterUserState {
    current: InterUser
    list: InterUser[]
}

const initialCurrent: InterUser = {
    name: '',
    id: 0,
    avatar: ''
}

const initialState: InterUserState = {
    current: initialCurrent,
    list: []
}

export const getUsers = createAsyncThunk(
    'getUsers',
    async () => {
        const response = await getUsersApi()
        return await response.json()
    }
)

const counterSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeCurrent: (state, action) => {
            state.current = state.list.find(({id}) => id === action.payload) || initialCurrent
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.list = action.payload,
            state.current = action.payload[0]
        })
    }
})

export const { changeCurrent } = counterSlice.actions;
export default counterSlice.reducer;