import { createSlice } from "@reduxjs/toolkit"

export const modalReducer = createSlice({
   name: 'modal',
   initialState: {
      show: false
   },
   reducers: {
      showModal: (state, action) => {
         state.show = action.payload
      }
   }

})
export const { showModal } = modalReducer.actions

export default modalReducer.reducer