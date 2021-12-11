import React, { useEffect, useState } from 'react'

export const Stopwatch = ({ isGameStarted }) => {
   const [time, setTime] = useState(0)

   useEffect(() => {
      let ticks = null

      if (isGameStarted) {
         ticks = setInterval(() => {
            setTime(prevTime => prevTime + 10)
         }, 10)
      } else {
         clearInterval(ticks)
      }
      return () => clearInterval(ticks)
   }, [isGameStarted])

   return (
      <div className="stopwatch">
         <button>TestTimer</button>
         <button>TestTimer2</button>
         <span className="stopwatch__minute">
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
         </span>
         <span className="stopwatch__second">
            {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
         </span>
      </div>
   )
}