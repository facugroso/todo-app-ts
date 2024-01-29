import { useState } from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
  {
    id: '1',
    title: 'seguir viendo los Twitch de midu',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender mas de react con typeScript',
    completed: false
  },
  {
    id: '3',
    title: 'hoy es el mejor día',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  return (
    <div className="todoapp">
      <Todos todos={todos}/>
    </div>
  )
}

export default App
