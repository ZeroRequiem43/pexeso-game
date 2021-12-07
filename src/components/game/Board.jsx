import React, { useEffect, useState } from 'react'
import { SingleCard } from './SingleCard'
import { useSelector } from 'react-redux'


export const Board = () => {
   const boardSize = useSelector((state) => state.board.cards)
   const [classes, setClasses] = useState('board')

   useEffect(() => {
      const size = boardSize.length
      if (size >= 0 && size < 16) {
         setClasses('board easy')
      } else if (size > 16 && size < 32)
         setClasses('board medium')
      else { setClasses('board hard') }
   }, [classes, boardSize])

   return (
      <div className={classes}>
         <SingleCard />
      </div>
   )
}