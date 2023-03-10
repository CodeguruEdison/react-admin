import globalReducer from 'state';
import { configureStore } from '@reduxjs/toolkit'
import { api } from './api';


export const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefault) => getDefault().concat(api.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch