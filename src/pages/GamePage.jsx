import React, { useState } from 'react'
import { Stopwatch } from '../components/game/Stopwatch'
import { Board } from '../components/game/Board'
import { useDispatch, useSelector } from 'react-redux'
import { generateCards, clearCards } from '../store/boardReducer'

export const GamePage = ({ setModalActive }) => {
   const dispatch = useDispatch()
   const difficult = useSelector(state => state.board.difficult)
   const [isGameStarted, setIsGameStarted] = useState(false)

   function startGame() {
      dispatch(generateCards())
      setIsGameStarted(true)
   }

   function stopGame() {
      dispatch(clearCards())
      setIsGameStarted(false)
   }

   return (
      <div className="game container">
         <div className="game__info">
            <div className="game__title">
               <h2>Kakoi-to title</h2>
               {!isGameStarted
                  ? <button className="btn btn-primary btn-show-settings" onClick={startGame}>Играть</button>
                  : <button className="btn btn-primary btn-show-settings" onClick={stopGame}>Остановить игру</button>
               }
               <button
                  className="btn btn-primary btn-show-settings"
                  disabled={isGameStarted}
                  onClick={() => setModalActive(true)}
               >{showSettings ? 'Скрыть настройки' : 'Показать настройки'}</button>
            </div>
            <div className="game__difficult">
               Сложность: <span className="bold">{difficult}</span>
            </div>
         </div>
         <div className="game__stopwatch">
            <Stopwatch isGameStarted={isGameStarted} />
            <div className="divider"></div>
         </div>
         <div className="game__content row">
            <div className="game__board col s12">
               <Board />
            </div>
         </div>
      </div>
   )
}