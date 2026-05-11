import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function Todo() {
 
    const {book} = useParams()

    const [todos, setTodos] = useState({})


    async function getTodo(id){

        const res = await axios(`https://jsonplaceholder.typicode.com/todos/${id}`)
        setTodos(res.data)
    }

   useEffect(() => {


    getTodo(book)


   }, [])

  return (
    <>
    
    <div className='text-5xl'>Todo component with dynic route: {book}</div>

    <p className='text-7xl'>{todos.title}</p>
    </>
  )
}
