import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCards, generateCards, setOption } from '../../store/boardReducer'
import formatTime from '../../utils/formatTimeFunction'

const Win = ({ setModal }) => {
   const gameTime = useSelector(state => state.board.gameTime)
   const dispatch = useDispatch()

   function playAgain() {
      dispatch(setOption('isGameWin', false))
      setModal(false)
      dispatch(clearCards())
      dispatch(generateCards())
   }

   return (
      <div className="win">
         <div className="win__text">Вы победили!</div>
         <div className="win__time">Ваше время: {formatTime(gameTime)}</div>
         <div className="win__button">
            <button className="btn btn-success" onClick={playAgain}>Сыграть ещё</button>
         </div>
      </div>
   )
}

export default Win