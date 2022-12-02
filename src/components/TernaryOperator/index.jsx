import React from 'react'
import { BeatLoader } from 'react-spinners'

const TernaryOperator = ({condition}) => {
  return (
    condition ? <BeatLoader/> : <h2>La condición es false</h2>
  )
}

export default TernaryOperator