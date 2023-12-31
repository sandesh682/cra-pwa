import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
