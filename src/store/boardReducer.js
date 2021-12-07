import { createSlice, nanoid } from "@reduxjs/toolkit"

export const boardReducer = createSlice({
   name: 'board',
   initialState: {
      size: 12,
      cards: [],
      difficult: 'Лёгкая'
      // cards: [{ id: 0, text: 'Pervii' }, { id: 1, text: 'Vtoroi' }, { id: 2, text: 'Tretii' }]
   },
   reducers: {
      setSize: (state, action) => {
         state.size = action.payload
      },
      setDifficult: (state, action) => {
         state.difficult = action.payload
      },
      generateCards: (state, action) => {
         const num = action.payload
         for (let i = 0; i < num; i++) {
            state.cards.push({ id: nanoid(), text: '123', clicked: false })
         }
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
export const { setSize, setDifficult, generateCards, setClicked } = boardReducer.actions

export default boardReducer.reducer