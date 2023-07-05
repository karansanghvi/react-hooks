import './App.css';
import React from 'react';
import FirstHook from './components/FirstHook';
import SecondHook from './components/SecondHook';
import ThirdHook from './components/ThirdHook';
import FourthHook from './components/FourthHook';
import FifthHook from './components/FifthHook';
import SixthHook from './components/SixthHook';

function App() {
  return (
    <>
    {/* useState Hook: it lets you add a state variable to your component. */}
      {/* <FirstHook/> */}
    
    {/* useEffect Hook: it lets you synchronize a component with an external system. */}
      {/* <SecondHook/> */}
    
    {/* useMemo Hook: it lets you cache the result of a calculation between re-renders. */}
      {/* <ThirdHook/> */}
    
    {/* useRef Hook: it lets you reference a value that’s not needed for rendering. */}
      {/* <FourthHook/> */}
    
    {/* useContext Hook: lets you read and subscribe to context from your component. */}
      {/* <FifthHook/> */}
    
    {/* useReducer Hook: it lets you add a reducer to your component. */}
      <SixthHook/>
    </>
  );
}

export default App;
