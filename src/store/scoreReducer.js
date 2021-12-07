import { createSlice } from "@reduxjs/toolkit";

export const scoreReducer = createSlice({
   name: 'score',
   initialState: {
      value: 0,
   },
   reducers: {
      increaseScore: (state, action) => {
         state.value = state.value + action.payload
      },
      resetScore: (state) => {
         state.value = 0
      }
   }
})

export const { increaseScore, resetScore } = scoreReducer.actions

export default scoreReducer.reducer