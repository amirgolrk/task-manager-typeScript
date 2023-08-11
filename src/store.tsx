import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Features/loginSlice'
import todoSlice from './Features/todoSlice'

export default configureStore({
    reducer : {
        login : loginSlice,
        todo : todoSlice,
    }
})