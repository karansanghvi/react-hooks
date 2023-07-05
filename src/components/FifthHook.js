import React from 'react'
import FunctionContextComponent from '../FunctionContextComponent'
// import ClassContextComponent from '../ClassContextComponent'
import { ThemeProvider } from '../ThemeContext'

export default function FifthHook() {

    // const [darkTheme, setDarkTheme] = useState(true)

    // function toggleTheme() {
    //     setDarkTheme(prevDarkTheme => !prevDarkTheme)
    // }

  return (
    <>
        <ThemeProvider>
            <FunctionContextComponent></FunctionContextComponent>
            {/* <ClassContextComponent></ClassContextComponent> */}
        </ThemeProvider>
    </>
  )
}
