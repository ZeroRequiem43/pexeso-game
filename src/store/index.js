import { configureStore } from '@reduxjs/toolkit'
import countReducer from './countReducer'
import boardReducer from './boardReducer'
import scoreReducer from './scoreReducer'

const store = configureStore({
   reducer: {
      count: countReducer,
      board: boardReducer,
      score: scoreReducer
   },
   // devTools: false  -- перед деплоем я так понимаю надо это поставить, хотя не факт
})

window.store = store

export default store