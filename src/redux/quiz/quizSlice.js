import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addScore: (state, action) => {
      state.score++;
    },
  },
});

export const { addScore } = quizSlice.actions;
export default quizSlice.reducer;
