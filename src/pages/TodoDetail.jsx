import { useParams } from 'react-router-dom'
import Layout from './Layout'
import { useEffect, useState } from 'react'

function TodoDeatail() {
    const params = useParams()

    const [todo, setTodo] = useState({})
    useEffect(() => {
        fetch('https://dummyjson.com/todos/1')
            .then((res) => res.json())
            .then((data) => setTodo(data))
    }, [])

    return (
        <>
            <Layout>
                <ul>
                    <li>id : {params.id}</li>
                    <li>todo : {todo.todo}</li>
                    <li>completed : {todo.completed ? '완료' : '미완료'}</li>
                    <li>userId : {todo.userId}</li>
                </ul>
            </Layout>
        </>
    )
}

export default TodoDeatail
