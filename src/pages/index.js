import TodoComponent from '@/components/TodoComponent'
import axios from 'axios'
import { useState, useEffect } from 'react'
import baseUrl from '@/utils/baseUrl'

export default function Home() {

  const [allTodo, setAllTodo] = useState()

  useEffect(() => {
    const getData = async() => {
      const response = await axios.get(`${baseUrl}/api/todo/`)
      const [result] = await Promise.all([response])
      setAllTodo(result)
    }
    getData();
  }, [])


  return (
    <>
      <TodoComponent todos={allTodo} setAllTodo={setAllTodo} />
    </>
  )
}
