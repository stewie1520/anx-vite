import { createSlice } from '@reduxjs/toolkit';
import isUndefined from 'lodash/isUndefined';
import pick from 'lodash/pick';

export const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        header: true,
        footer: true,
        collapse: false,
    },
    reducers: {
        setDisplayLayout: (state, action) => {
            state.header = action.payload.header;
            state.footer = action.payload.footer;
        },
        toggleCollapse: (state, action) => {
            state.collapse = isUndefined(action.payload?.collapse) ? !state.collapse : action.payload.collapse;
        },
    },
});

export const selectLayout = rootState => pick(rootState.layout, 'header', 'footer');
export const selectCollapse = rootState => rootState.layout.collapse;

export const {
    setDisplayLayout,
    toggleCollapse,
} = layoutSlice.actions;
export default layoutSlice.reducer;
