import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bgcolor,setbgcolor]=useState('red')
  const [form,setForm]=useState({
    email:'',
    phone:''
  })
  function handleclick(){
    alert('button was clicked');
  }
  function handlemouseover(){
    setbgcolor('blue')
  }
  function handlemouseout(){
    setbgcolor('red')
  }
  function handleChange(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click it</button>
        <div className="red" onMouseOver={handlemouseover} onMouseOut={handlemouseout} style={{backgroundColor:bgcolor}}>I am a red box</div>
        <input type="text" name='email' value={form.email} onChange={handleChange}/>
        <input type="text" name='phone' value={form.phone} onChange={handleChange}/>
      </div>
    </>
  )
}

export default App
