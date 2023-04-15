import React from 'react'

interface TodoProps {
    items: {
        id: number,
        text: string
    }[];
}

const TodoList: React.FC<TodoProps> = (props) => {
  return (
    <div>
        <ul>
        {
            props.items.map(item=>(
                <li>{item.text}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default TodoList