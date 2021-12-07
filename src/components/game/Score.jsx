import React from 'react'
import { useSelector } from 'react-redux'

export const Score = () => {
   const score = useSelector((state) => state.score.value)

   return (
      <span>{score}</span>
   )
}