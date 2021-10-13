import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducerType } from '../modules'
import { increase, decrease } from '../modules/counter'

const Counter = () => {
  const counter = useSelector((state: RootReducerType) => state.counter)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increase())
  }

  const handleDecrease = () => {
    dispatch(decrease())
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </>
  )
}

export default Counter
