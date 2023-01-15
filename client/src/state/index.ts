import { createSlice } from '@reduxjs/toolkit';

export interface IThemeMode {
    mode: 'dark' | 'light'
}
const initialState: IThemeMode = {
    mode: 'dark'
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light'
        }
    }
})

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;