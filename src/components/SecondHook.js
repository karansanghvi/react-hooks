import React, {useState, useEffect} from 'react'

export default function SecondHook() {

    // const [resourceType, setResourceType] = useState('posts')

    // const [items, setItem] = useState([])

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    // console.log('render')

    // useEffect(() => {
    //     // console.log('resource type changed')
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //     .then(response => response.json())
    //     .then(json => setItem(json))
    // }, [resourceType])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

  return (
    <>
        {/* <div>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })} */}
        <div>
            {windowWidth}
        </div>
    </>
  )
}
