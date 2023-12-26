import {configureStore} from '@reduxjs/toolkit';
import horoscopoReducer from './Slice/horoscopoSlice';

export const store = configureStore({
  reducer: {
    horoscopo: horoscopoReducer,
  },
});
