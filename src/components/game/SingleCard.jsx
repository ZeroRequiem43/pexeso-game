import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setClicked } from '../../store/boardReducer'

export const SingleCard = () => {
   const cards = useSelector(state => state.board.cards)
   const cardsBack = useSelector(state => state.board.cardsType)
   const dispatch = useDispatch()



   return (
      <>
         {cards.length === 0
            ? null
            : cards.map(c => {
               return (
                  <div className={"card card__wrapper " + cardsBack} key={c.id}>
                     <div
                        className={c.clicked ? "card__single opened" : "card__single"}
                        onClick={!c.done ? () => dispatch(setClicked(c.id)) : undefined}
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