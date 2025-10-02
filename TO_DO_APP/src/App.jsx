import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Status from './components/Status';
import { v4 as uuidv4 } from 'uuid';
import {FaEdit ,FaTrash} from 'react-icons/fa';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [addPopup , setAddPopup] = useState(false)
  const [deletePopup , setDeletePopup] = useState(false)

  useEffect(() => {
    try {
      let localTodos = localStorage.getItem('todos')
      if (localTodos && localTodos !== 'undefined') {
        setTodos(JSON.parse(localTodos))
      }
    } catch (error) {
      console.error("Error loading todos:", error)
      localStorage.removeItem('todos') // Clear corrupted data
    }
  }, [])
  const handleEdit = (id) => {
    let temp = todos.filter((item) => {
      return item.id === id
    })
    setTodo(temp[0].todo)
    handleDelete(id)
  }
  const handleDelete = (id) => {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setDeletePopup(true)
    setTimeout(() => {
      setDeletePopup(false)
    }, 1500);
  }
  const handleAdd = () => {
    const newTodos = [...todos, { id: uuidv4(), todo: todo, isCompleted: false }]
    setTodos(newTodos)
    setTodo("")
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setAddPopup(true)
    setTimeout(() => {
      setAddPopup(false)
    }, 1500);
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let checked = e.target.checked
    const newTodos = todos.map(item => item.id === id ? { ...item, isCompleted: checked } : item)
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const activeTodos = todos.filter(item => !item.isCompleted)
  const completedTodos = todos.filter(item => item.isCompleted)

  return (
    <>
      <Navbar />
      {addPopup && (
        <div className='fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-500'>
          ✅ Task added successfully!
        </div>
      )}
      {deletePopup && (
        <div className='fixed top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-500'>
         ❌Task Deleted!
        </div>
      )}
      <h1 className='text-center text-3xl text-blue-600 font-bold mt-2'>My Tasks</h1>
      <h3 className='text-center text-lg text-gray-400'>Stay focused and organised </h3>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-white shadow-lg min-h-[80vh] w-full sm:max-w-[80vw]">
        <div className='addTodo my-5'>
          <h2 className='text-lg font-bold'>Add Task</h2>
          <input onChange={handleChange} value={todo} type="text" placeholder='what needs to be done?' className='border border-gray-300 p-0.5 rounded-md bg-white w-1/2' />
          <button onClick={handleAdd} disabled={todo.length<2} className='bg-violet-700 hover:bg-violet-800 text-white p-2 
          mx-4 rounded-lg text-sm font-bold disabled:bg-violet-700'>+ Add</button>
        </div>
        <Status activeCount={activeTodos.length} completedCount={completedTodos.length}/>
        <h2 className='text-lg font-bold '>Active Tasks</h2>
        <div className="todos">
          {activeTodos.length === 0 && <div className='text-center my-5'>No Active tasks</div>}
          {activeTodos.map(item => {
            return <div
              key={item.id}
              className="todo flex flex-col sm:flex-row w-full justify-between items-start sm:items-center my-3 p-3 bg-white rounded-lg shadow"
            >
              <div className="flex gap-3 items-center mb-2 sm:mb-0">
                <input
                  onChange={handleCheckbox}
                  type="checkbox"
                  name={item.id}
                  checked={item.isCompleted}
                />
                <div className={item.isCompleted ? "line-through text-gray-500" : ""}>
                  {item.todo}
                </div>
              </div>

              <div className="buttons flex gap-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="text-violet-700 hover:bg-violet-200 px-3 py-1 rounded-md text-sm font-bold"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:bg-red-200 px-3 py-1 rounded-md text-sm font-bold"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>

          })}
        </div>
        <h2 className='text-lg font-bold '>Completed Tasks</h2>
        <div className="todos">
          {completedTodos.length === 0 && <div className='text-center my-5'>No task is done yet</div>}
          {completedTodos.map(item => {
            return <div
              key={item.id}
              className="todo flex flex-col sm:flex-row w-full justify-between items-start sm:items-center my-3 p-3 bg-white rounded-lg shadow"
            >
              <div className="flex gap-3 items-center mb-2 sm:mb-0">
                <input
                  onChange={handleCheckbox}
                  type="checkbox"
                  name={item.id}
                  checked={item.isCompleted}
                />
                <div className={item.isCompleted ? "line-through text-gray-500" : ""}>
                  {item.todo}
                </div>
              </div>

              <div className="buttons flex gap-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="text-violet-700 hover:bg-violet-200 px-3 py-1 rounded-md text-sm font-bold"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:bg-red-200 px-3 py-1 rounded-md text-sm font-bold"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>

          })}
        </div>
      </div>
    </>
  )
}

export default App
