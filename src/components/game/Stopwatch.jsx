import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOption } from '../../store/boardReducer'
import { showModal } from '../../store/modalReducer'
import formatTime from '../../utils/formatTimeFunction'

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
      } else if (isGameWin && time > 0) {
         dispatch(setOption('gameTime', time))
         clearInterval(ticks)
         dispatch(showModal(true))
         setTime(0)
      } else {
         clearInterval(ticks)
         setTime(0)
      }
      return () => clearInterval(ticks)
   }, [time, isGameStarted, isGameWin, dispatch])



   return (
      <div className="stopwatch">
         {formatTime(time)}
      </div>
   )
}