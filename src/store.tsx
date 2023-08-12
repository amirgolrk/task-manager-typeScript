import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Features/loginSlice'
import todoSlice from './Features/todoSlice'

const store = configureStore({
    reducer : {
        login : loginSlice,
        todo : todoSlice,
    }
})


export default store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;