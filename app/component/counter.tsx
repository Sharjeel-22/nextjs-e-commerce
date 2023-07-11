import React from 'react'
import "../css/counter.css";
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { RootState } from '@/store';
import { decrement, increment } from '@/slice/counterSlice';

export default function Counter() {
    const count = useSelector((state: RootState) => state.value);
    const dispatch = useDispatch();
  return (
    <div>
        <p>Defualt value of {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
