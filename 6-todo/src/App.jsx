import { useState } from 'react'
import Button from './component/Button'
import Card from './component/Card'
import Input from './component/Input'
import { IconPlus, IconX } from '@tabler/icons-react'

function App() {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  function handleAddTask(e)
  {
    e.preventDefault()
    setTasks([...tasks, {
      id: Date.now(),
      name: newTask
    }])
    setNewTask('')
  }

  function handleRemove(id)
  {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className='mt-10 mx-auto max-w-lg space-y-4'>
      <form className='border' onSubmit={handleAddTask}>
        <div className='border-b p-4'>
          <h1 className='text-xl font-bold'>TODO</h1>
        </div>
        <div className='p-4 flex gap-x-4'>
          <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
          <Button text={<IconPlus />} />
        </div>
      </form>
      {tasks.map((task) => {
        return <Card key={task.id}>
          <Card.Name>{task.name}</Card.Name>
          <Card.Remove onClick={() => handleRemove(task.id)}>
            <IconX size={16} />
          </Card.Remove>
        </Card>
      })}
    </div>
  )
}

export default App
