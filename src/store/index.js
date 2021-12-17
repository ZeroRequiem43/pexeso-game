import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './boardReducer'
import modalReducer from './modalReducer'

const store = configureStore({
   reducer: {
      board: boardReducer,
      modal: modalReducer
   },
   // devTools: false  -- перед деплоем я так понимаю надо это поставить, хотя не факт
})

window.store = store

export default store