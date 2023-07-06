import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function EightHook() {

    const [name, setName] = useLocalStorage('name', '')

  return (
    <>
        <input 
            type="text" 
            value={name}
            onChange={e => setName(e.target.value)}
        />
    </>
  )
}
