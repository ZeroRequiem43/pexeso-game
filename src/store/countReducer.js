import { createSlice } from "@reduxjs/toolkit"

export const countReducer = createSlice({
   name: 'count',
   initialState: {
      totalTime: null // ? Нужно ли общее время выполнения задач в принципе? Может это лишний редюсер?
   },
   reducers: {
      setTotalTime: (state, action) => {
         state.totalTime = action.payload
      }
   }
})
export const { setTotalTime } = countReducer.actions

export default countReducer.reducer