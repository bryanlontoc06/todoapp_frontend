import React from 'react'
import EditIcon from '@/components/svgs/EditIcon.svg'
import DeleteIcon from '@/components/svgs/DeleteIcon.svg'

const TodoItem = ({item, index, todos, setTodos}) => {

  const handleEditItem = (id) => {
    console.log('add')
    console.log(id)
  }

  const handleDeleteItem = (id) => {
    todos.splice(id, 1)
    setTodos([...todos])
    console.log(todos)
  }

  return (
    <div className="flex border-2 p-3 rounded-md shadow-xl">
      <div className="flex gap-3 items-center">
          <input 
            type="checkbox" 
            id={index}
            className="
              peer
              cursor-pointer 
              w-5 h-5 
              border-2 
              rounded-md 
              focus: ring-0
              bg-sky-100
              border-sky-300
              text-sky-500
            "
          />
        <label htmlFor={index} className="cursor-pointer peer-checked:line-through peer-checked:text-gray-400">{item}</label>
      </div>
      <div className="flex ml-auto gap-4">
        <button onClick={() => handleEditItem(index)}>
          <EditIcon className="w-6 h-6 text-gray-500" />
        </button>
        <button onClick={() => handleDeleteItem(index)}>
          <DeleteIcon className="w-6 h-6 text-red-500"/>
        </button>
      </div>
    </div>
  )
}

export default TodoItem