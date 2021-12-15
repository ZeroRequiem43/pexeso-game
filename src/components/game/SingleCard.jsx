import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOption, setClicked, closeCards } from '../../store/boardReducer'

export const SingleCard = () => {
   const cards = useSelector(state => state.board.cards)
   const cardsBack = useSelector(state => state.board.cardsType)
   const cardTime = useSelector(state => state.board.time)
   const dispatch = useDispatch()
   const [allowClick, setAllowClick] = useState(true)

   useEffect(() => {
      const cardsToClose = cards.filter(c => c.clicked === true && c.done === false)
      if (cardsToClose.length > 1) {
         setAllowClick(false)
         setTimeout(() => {
            dispatch(closeCards())
            setAllowClick(true)
         }, cardTime)
      }
   }, [cards, cardTime, dispatch])

   useEffect(() => {
      if (cards.length > 0) {
         const cardsEnd = cards.every(c => c.done === true)
         if (cardsEnd) {
            dispatch(setOption('isGameWin', true))
         }
      }
   }, [cards, dispatch])

   return (
      <>
         {cards.length !== 0 &&
            cards.map(c => {
               return (
                  <div className={"card card__wrapper " + cardsBack} key={c.id}>
                     <div
                        className={`card__single card-${c.clicked ? 'opened' : 'closed'} card-${c.done ? 'done' : 'undone'}`}
                        onClick={!c.done && allowClick ? () => dispatch(setClicked(c.id)) : undefined}
                     >
                        <div className="card__content card-front">
                        </div>
                        <div className="card__content card-back">
                           <img src={c.path} alt="" />
                        </div>
                     </div>
                  </div>
               )
            })}
      </>
   )
}