import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setClicked } from '../../store/boardReducer'

export const SingleCard = () => {
   const cards = useSelector((state) => state.board.cards)
   const dispatch = useDispatch()

   return (
      <>
         {cards.length === 0
            ? <div><span className="bold red darken-4">Выберите количество карт</span></div>
            : cards.map(c => {
               return (
                  <div className="card card__wrapper">
                     <div
                        className={c.clicked ? "card__single opened" : "card__single"}
                        key={c.id}
                        onClick={() => dispatch(setClicked(c.id))}
                     >
                        <div className="card__content card-front">{c.text}</div>
                        <div className="card__content card-back"></div>
                     </div>
                  </div>
               )
            })}
      </>
   )
}