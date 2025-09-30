import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [data , setData] =useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>setData(data))
  })
  return (
    <>
      <Navbar/>
      <div className='card-container'>
        {data.map((data)=>{
          return <Card 
          key={data.id} 
          userId={data.userId} 
          id={data.id} 
          title={data.title} 
          body={data.body}/>
        })}
      </div>
    </>
  )
}

export default App
