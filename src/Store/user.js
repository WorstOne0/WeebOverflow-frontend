import { createSlice } from "@reduxjs/toolkit";

import { useQuery, gql } from "@apollo/client";

const ALL_USERS = gql`
  query {
    getLoggedUser {
      id
      role
    }
  }
`;

const initialState = {
  userId: null,

  logged: false,
  role: "Guest",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getLoggedUser: (state, action) => {},
  },
});

export const { loggin } = userSlice.actions;

export default userSlice.reducer;
