import './App.css';
import React from 'react';
import FirstHook from './components/FirstHook';
import SecondHook from './components/SecondHook';
import ThirdHook from './components/ThirdHook';

function App() {
  return (
    <>
    {/* useState Hook: it lets you add a state variable to your component. */}
      {/* <FirstHook/> */}
    
    {/* useEffect Hook: it lets you synchronize a component with an external system. */}
      {/* <SecondHook/> */}
    
    {/* useMemo Hook: it lets you cache the result of a calculation between re-renders. */}
      <ThirdHook/>
    </>
  );
}

export default App;
