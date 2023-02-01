import React from 'react'
import EditIcon from '@/components/svgs/EditIcon.svg'
import DeleteIcon from '@/components/svgs/DeleteIcon.svg'
import CheckIcon from '@/components/svgs/CheckIcon.svg'

const TodoItem = ({todo}) => {


  return (
    <div className="flex border-2 p-3 rounded-md">
      <div className="flex gap-3 items-center">
          <input 
            type="checkbox" 
            id="checkbox"
            className="
              peer
              cursor-pointer 
              w-5 h-5 
              border-2 
              rounded-md 
              focus: ring-green-300
              bg-sky-100
              border-sky-300
              text-sky-500
            "
          />
        <label htmlFor="checkbox" className="cursor-pointer peer-checked:line-through peer-checked:text-gray-400">Test to do hahahah</label>
      </div>
      <div className="flex ml-auto gap-4">
        <button>
          <EditIcon className="w-6 h-6 text-gray-500" />
        </button>
        <button>
          <DeleteIcon className="w-6 h-6 text-red-500"/>
        </button>
      </div>
    </div>
  )
}

export default TodoItem