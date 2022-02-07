import { name } from './slice';

export const selectUsers = rootState => rootState[name].users;
