import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './boardReducer'

const store = configureStore({
   reducer: {
      board: boardReducer,
   },
   // devTools: false  -- перед деплоем я так понимаю надо это поставить, хотя не факт
})

window.store = store

export default store