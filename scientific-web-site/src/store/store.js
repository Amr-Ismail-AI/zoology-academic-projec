import { configureStore } from '@reduxjs/toolkit';
import phylumReducer from './phylumSlice';

export const store = configureStore({
  reducer: {
    phylums: phylumReducer,
  },
});