import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCards, generateCards, setOption } from '../../store/boardReducer'
import { showModal } from '../../store/modalReducer'
import formatTime from '../../utils/formatTimeFunction'

const Win = () => {
   const gameTime = useSelector(state => state.board.gameTime)
   const dispatch = useDispatch()

   function playAgain() {
      dispatch(setOption('isGameWin', false))
      dispatch(showModal(false))
      dispatch(clearCards())
      dispatch(generateCards())
   }

   return (
      <div className="win">
         <div className="win__text center">Вы победили!</div>
         <div className="win__time">Ваше время: <span className="bold">{formatTime(gameTime)}</span></div>
         <div className="win__button">
            <button className="btn btn-success" onClick={playAgain}>Сыграть ещё</button>
         </div>
      </div>
   )
}

export default Win