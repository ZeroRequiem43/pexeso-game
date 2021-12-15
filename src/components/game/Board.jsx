import React, { useEffect, useState } from 'react'
import { SingleCard } from './SingleCard'
import { useSelector } from 'react-redux'


export const Board = () => {
   const boardSize = useSelector((state) => state.board.cards)
   const [diffClass, setDifClass] = useState('')

   useEffect(() => {
      const size = boardSize.length
      if (size >= 0 && size < 13) {
         setDifClass('easy')
      } else if (size > 12 && size < 32)
         setDifClass('medium')
      else { setDifClass('hard') }
   }, [diffClass, boardSize])

   return (
      <div className={`board ${diffClass}`}>
         <SingleCard />
      </div>
   )
}