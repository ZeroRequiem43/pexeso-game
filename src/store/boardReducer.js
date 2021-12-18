import { createSlice, nanoid } from "@reduxjs/toolkit"
import paths from '../data/pathsData.json'
import shuffle from "../utils/shuffleFunction"

export const boardReducer = createSlice({
   name: 'board',
   initialState: {
      compare: [],
      cards: [],
      size: 12,
      time: 1500,
      gameTime: 0,
      isGameWin: false,
      cardsType: 'animals',
      difficult: 'Лёгкая',
      showModal: false
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
      clearCards: (state) => {
         state.cards = []
      },
      setClicked: (state, action) => {
         const currentCards = [...state.cards]
         let newCards = currentCards.map(c => {
            if (c.id !== action.payload) {
               return c
            }

            if (!c.clicked) {
               state.compare.push(c)
               if (state.compare.length === 2) {
                  if (state.compare[0].name === state.compare[1].name && state.compare[0].id !== state.compare[1].id) {
                     const prevCards = currentCards.filter(card => card.name === c.name)
                     prevCards.forEach(card => card.done = true)
                  }
                  state.compare = []
               }
            }
            return { ...c, clicked: !c.clicked }
         })
         state.cards = newCards
      },
      closeCards: (state) => {
         state.cards.forEach((c) => {
            if (c.clicked === true && c.done === false) {
               c.clicked = false
            }
            return c
         })
      }, showModal: (state, action) => {
         state.showModal = action.payload
      }
   },

})
export const { setOption, generateCards, clearCards, setClicked, closeCards, showModal } = boardReducer.actions

export default boardReducer.reducer