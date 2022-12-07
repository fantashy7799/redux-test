import React, {useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlide'

function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <strong>{count}</strong>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default Counter