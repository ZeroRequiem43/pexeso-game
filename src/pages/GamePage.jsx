import React from 'react'
import { Stopwatch } from '../components/game/Stopwatch'
import { Board } from '../components/game/Board'
import { useDispatch, useSelector } from 'react-redux'
import { generateCards, clearCards, setOption, showModal } from '../store/boardReducer'

const GamePage = ({ isGameStarted, setGameStart }) => {
   const dispatch = useDispatch()
   const difficult = useSelector(state => state.board.difficult)

   function startGame() {
      dispatch(generateCards())
      setGameStart(true)
   }

   function resetGame() {
      dispatch(clearCards())
      dispatch(setOption('isGameWin', false))
      setGameStart(false)
   }

   return (
      <div className="game container">
         <div className="game__info">
            <div className="game__controls">
               {!isGameStarted
                  ? <button className="btn btn-primary btn-show-settings" onClick={startGame}>Играть</button>
                  : <button className="btn btn-primary btn-show-settings" onClick={resetGame}>Остановить игру</button>
               }
               <button
                  className="btn btn-primary btn-show-settings"
                  disabled={isGameStarted}
                  onClick={() => dispatch(showModal(true))}
               >Настройки</button>
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

export default GamePage