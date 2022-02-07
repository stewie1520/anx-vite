import { createSlice } from '@reduxjs/toolkit';

export const name = 'dashboard';
export const dashboardSlice = createSlice({
  name,
  initialState: {
    userFetching: true,
    userFetchError: null,
    users: [],
  },
  reducers: {
    userFetchingStarted: (state) => {
      state.userFetching = true;
    },
    userFetchingSuccessed: (state, action) => {
      state.userFetching = false;
      state.users = action.payload.users;
    },
    userFetchingFailed: (state, action) => {
      state.userFetching = false;
      state.userFetchError = action.payload.error;
      state.users = [];
    },
  },
});

export const {
  userFetchingStarted,
  userFetchingSuccessed,
  userFetchingFailed,
} = dashboardSlice.actions;

export const reducer = dashboardSlice.reducer;
