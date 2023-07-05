import React, { useRef, useState} from 'react'

export default function FourthHook() {

    const [name, setName] = useState('')
    const inputRef = useRef()

    function focus() {
        inputRef.current.focus()
        inputRef.current.value = 'some value'
    }

  return (
    <>
        <input value={name} onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <button onClick={focus}>Focus</button>
    </>
  )
}
