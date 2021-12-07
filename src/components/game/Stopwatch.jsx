import React, { useEffect, useState } from 'react'

export const Stopwatch = () => {
   const [time, setTime] = useState({ minute: '00', second: '00' })
   const [isRunning, setIsRunning] = useState(false)

   function formatTime(value) {
      let strValue = value.toString()
      if (strValue.length < 2) {
         strValue = '0' + strValue
      }
      return strValue
   }

   useEffect(() => {
      let ticks
      if (isRunning) {
         ticks = setInterval(() => {
            setTime((prevState) => ({
               ...prevState,
               second: prevState.second++
            }))
            if (time.second > 10) {
               setTime((prevState) => ({
                  minute: prevState.minute++,
                  second: '00'
               }))
            }
         }, 1000)
      } else if (!isRunning) {
         clearInterval(ticks)
      }
      return () => clearInterval(ticks)
   }, [isRunning, time])

   return (
      <div className="stopwatch">
         <button onClick={() => setIsRunning(true)}>TestTimer</button>
         <button onClick={() => setIsRunning(false)}>TestTimer2</button>
         <span className="stopwatch__minute">
            {formatTime(time.minute)}:
         </span>
         <span className="stopwatch__second">
            {formatTime(time.second)}
         </span>
      </div>
   )
}