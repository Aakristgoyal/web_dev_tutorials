import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todos, settodos] = useState([
    { title: "Learn React", description: "Learn the basics of React" },
    { title: "Learn Vite", description: "Learn the basics of Vite" },
    { title: "Build something awesome", description: "Build something awesome with React and Vite" },
  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todos.map(todo => {
        return <div className='m-4 p-4 border border-0.5 border-blue-500' key={todo.title}>
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.description}</div>
        </div>
      })}
      <div className="card">
        <button onClick={() => {
          setshowbtn(!showbtn)
          setCount((count) => count + 1)
        }}>
          {showbtn ? "Hide Jadoo button" : "show Jadoo button"}
        </button>
        {showbtn && <button>Jadoo button</button>}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
