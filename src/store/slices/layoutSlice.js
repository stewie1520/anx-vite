import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        header: true,
        footer: true,
    },
    reducers: {
        setDisplayLayout: (state, action) => {
            state.header = action.payload.header;
            state.footer = action.payload.footer;
        },
    },
});

export const selectLayout = rootState => rootState.layout;
export const { setDisplayLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
