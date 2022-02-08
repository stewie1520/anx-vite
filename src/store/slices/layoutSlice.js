import { createSlice } from '@reduxjs/toolkit';
import isUndefined from 'lodash/isUndefined';
import pick from 'lodash/pick';

export const name = 'layout';

export const layoutSlice = createSlice({
    name,
    initialState: {
        header: true,
        footer: true,
        sidebar: true,
        collapse: false,
        theme: null,
    },
    reducers: {
        setDisplayLayout: (state, action) => {
            state.header = action.payload.header;
            state.footer = action.payload.footer;
            state.sidebar = action.payload.sidebar;
        },
        toggleCollapse: (state, action) => {
            state.collapse = isUndefined(action.payload?.collapse) ? !state.collapse : action.payload.collapse;
        },
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

export const selectLayout = rootState => pick(rootState.layout, 'header', 'footer', 'sidebar');
export const selectCollapse = rootState => rootState[name].collapse;
export const selectTheme = rootState => rootState[name].theme;

export const {
    setDisplayLayout,
    toggleCollapse,
    setTheme,
} = layoutSlice.actions;
export default layoutSlice.reducer;
