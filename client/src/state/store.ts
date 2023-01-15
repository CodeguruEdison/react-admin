import globalReducer from 'state';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        global: globalReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch