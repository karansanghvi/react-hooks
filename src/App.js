import './App.css';
import React from 'react';
import FirstHook from './components/FirstHook';
import SecondHook from './components/SecondHook';

function App() {
  return (
    <>
    {/* useState Hook: it lets you add a state variable to your component. */}
      {/* <FirstHook/> */}
    
    {/* useEffect Hook: it lets you synchronize a component with an external system. */}
      <SecondHook/>
    </>
  );
}

export default App;
