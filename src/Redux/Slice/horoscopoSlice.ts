import {createSlice} from '@reduxjs/toolkit';
import {IZodialSings} from '../../Services/interfaces';

const initialState: IZodialSings = {
  id: 0,
  end_date: '',
  image: '',
  init_date: '',
  name: '',
  prediction: '',
};

export const horoscopoSlice = createSlice({
  name: 'horoscopo',
  initialState,
  reducers: {
    addHoroscopo: (state, action) => {
      const data = action.payload;
      state.id = data.id;
      state.end_date = data.end_date;
      state.image = data.image;
      state.init_date = data.init_date;
      state.name = data.name;
      state.prediction = data.prediction;
    },
  },
});

export const {addHoroscopo} = horoscopoSlice.actions;
export default horoscopoSlice.reducer;
