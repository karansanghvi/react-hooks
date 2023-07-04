import React, {useState} from 'react'

function countInitial() {
    console.log('run function')
    return 4
}

export default function FirstHook() {

    const [count, setCount] = useState(countInitial())
    const [theme, setTheme] = useState('blue')

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
    </>
  )
}
