import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null, course: null, rating: [], semestr: [], },  
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.rating = action.payload.rating;
        state.user.semestr = action.payload.semestr;
        state.user.name = action.payload.username;
        state.user.email = action.payload.email;
        state.user.course = action.payload.course;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.rating = action.payload.rating;
        state.user.semestr = action.payload.semestr;
        state.user.name = action.payload.username;
        state.user.email = action.payload.email;
        state.user.course = action.payload.course;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
