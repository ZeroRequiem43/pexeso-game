import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOption } from '../../store/boardReducer'

export const Stopwatch = ({ isGameStarted }) => {
   const isGameWin = useSelector(state => state.board.isGameWin)
   const [time, setTime] = useState(0)
   const dispatch = useDispatch()

   useEffect(() => {
      let ticks = null

      if (isGameStarted && !isGameWin) {
         ticks = setInterval(() => {
            setTime(prevTime => prevTime + 10)
         }, 10)
      } else if (isGameWin) {
         clearInterval(ticks)
         dispatch(setOption('gameTime', time))
         console.log('dispatchil time')
         // ! Отсюда надо открыть модалку как-то, т.к. через пропсы теряется контекст
      } else {
         clearInterval(ticks)
         setTime(0)
      }
      return () => clearInterval(ticks)
   }, [time, isGameStarted, isGameWin, dispatch])

   return (
      <div className="stopwatch">
         <span className="stopwatch__minute">
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
         </span>
         <span className="stopwatch__second">
            {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
         </span>
      </div>
   )
}