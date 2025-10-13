import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { counterContext } from './context/Context'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={{count,setCount}}>
      <Navbar/>
      <div>
        <button onClick={()=>setCount((count)=>count+1)}>Increment {count}</button>
      </div>
      </counterContext.Provider>
    </>
  )
}

export default App
