import React from 'react'
import { Stopwatch } from '../components/game/Stopwatch'
import { Board } from '../components/game/Board'
import { Settings } from '../components/game/Settings'
import { useDispatch, useSelector } from 'react-redux'
import { generateCards } from '../store/boardReducer'

export const GamePage = () => {
   const dispatch = useDispatch()
   const difficult = useSelector(state => state.board.difficult)

   return (
      <div className="game container">
         <div className="game__info">
            <div className="game__title">
               <h2>Kakoi-to title</h2>
               <button className="btn btn-primary" onClick={() => dispatch(generateCards(24))}>Test</button>
               <button className="btn btn-primary">Test2</button>
            </div>
            <div className="game__difficult">
               Сложность: <span className="bold">{difficult}</span>
            </div>
         </div>
         <div className="game__stopwatch">
            <Stopwatch />
            <div className="divider"></div>
         </div>
         <div className="game__content row">
            <div className="game__board col s12">
               <Board />
            </div>
            <div className="game__settings">
               <Settings />
            </div>
         </div>
      </div>
   )
}