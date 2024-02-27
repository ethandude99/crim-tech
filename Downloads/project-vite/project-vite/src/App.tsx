import { useState } from 'react'
import Modal from './components/Modal'

function App() {
  // TODO: fix the state of this `todos`
  const [todos, setTodos] = useState(['Do the dishes.', 'Finish this project.'])

  // TODO: make components needed for TODO
  const removeTask = (task: string) => {
    const updatedTodos = todos.filter((t) => t != task)
    setTodos(updatedTodos)
  }

  // TODO: use `map` to render tasks from `todos`
  // remember about `keys` prop!
  const todoList = todos.map((task) => (
    <div>
      <li key={task}>{task}</li>
      <button onClick={() => removeTask(task)}>Delete</button>
    </div>
  ))

  const [input, setInput] = useState('')
  const inputChange = (event) => {
    setInput(event.target.value)
  }

  const addTask = (event) => {
    event.preventDefault()
    setTodos([...todos, input])
  }

  return (
    <>
      <ul>{todoList}</ul>

      <form
        style={{
          marginTop: '10px',
        }}
        onSubmit={addTask}
      >
        {
          // TODO: lift input text into a state so you can
          // handle it and add to `todos` array
        }
        <input onChange={inputChange} />
        <button type="submit">Create Task</button>
      </form>

      <Modal />
    </>
  )
}
export default App
