import { createSlice, nanoid } from "@reduxjs/toolkit"
import paths from '../data/pathsData.json'
import shuffle from "../utils/shuffleFunction"

export const boardReducer = createSlice({
   name: 'board',
   initialState: {
      cards: [],
      size: 12,
      cardsType: 'animals',
      difficult: 'Лёгкая',
   },
   reducers: {
      setOption: {
         reducer(state, action) {
            state[action.payload.type] = action.payload.value
         },
         prepare(type, value) {
            return { payload: { type, value } }
         }
      },
      generateCards: (state) => {
         const tempArr1 = []
         const tempArr2 = []
         const type = state.cardsType
         const halfSize = state.size / 2
         for (let i = 0; i < halfSize; i++) {
            tempArr1.push({ id: nanoid(), name: paths[type][i].name, path: paths[type][i].path, clicked: false, done: false })
            tempArr2.push({ id: nanoid(), name: paths[type][i].name, path: paths[type][i].path, clicked: false, done: false })
         }
         state.cards = shuffle(tempArr1.concat(tempArr2))
      },
      // Для определения совпавших карт будет добавляться новый класс, который запретит им переворачиваться обратно
      // Сравнение будет производится по имени. Для этого создадутся новый временный массив, который будет чиститься каждый раз
      // когда совпадение произошло или не произошло
      clearCards: (state) => {
         state.cards = []
      },
      setClicked: (state, action) => {
         let currentCards = [...state.cards]
         let newCardsList = currentCards.map(c => c.id === action.payload
            ? { ...c, clicked: !c.clicked }
            : c)
         state.cards = newCardsList
      }
   }
})
export const { setOption, generateCards, clearCards, setClicked } = boardReducer.actions

export default boardReducer.reducer