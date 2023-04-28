import Button from './component/Button'
import Card from './component/Card'
import Notification from './component/Notification'
import { IconArrowNarrowRight } from '@tabler/icons-react'

function App() {
  return (
    <div className='mt-10 mx-auto max-w-lg space-y-4'>
      <Notification body="Hello, world! This is a message" time="10"/>

      <Card>
        <Card.Title>Edge and Node.js Runtimes</Card.Title>
        <Card.Body>Data Fetching methods that run on the server and enable you to render content in different ways.</Card.Body>
      </Card>

      <Button 
        text="Browse Themes"
        icon={<IconArrowNarrowRight />}
        type="submit"
        onClick={() => console.log("Halo")}
      />
    </div>
  )
}

export default App
