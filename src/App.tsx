import React from 'react'
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [{ id: 1, text: "Task 1"}];

  return (
    <div className='App'>
      <TodoList items={todos} />
    </div>
  )
}

export default App