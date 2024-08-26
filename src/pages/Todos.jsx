import { useEffect, useState } from 'react'
import TodoHeader from '../components/TodoHeader'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import Layout from './Layout'

function Todos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((data) => setTodos(data.todos))
    }, [])

    const onInsert = (todo) => {
        // const newTodos = [...todos, { id: lastId, todo, completed: false }]
        // setTodos(newTodos)
        // lastId++
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo,
                completed: false,
                userId: 5,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
    }

    const onDelete = (id) => {
        // const newTodos = todos.filter((todo) => todo.id != id)
        // setTodos(newTodos)

        fetch(`https://dummyjson.com/todos/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(console.log)
    }

    const onToggle = (id) => {
        // const newTodos = todos.map((todo) =>
        //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
        // )
        // setTodos(newTodos)

        fetch(`https://dummyjson.com/todos/${id}`, {
            method: 'PUT' /* or PATCH */,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: false,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
    }

    return (
        <>
            <Layout>
                <TodoHeader />
                <TodoForm onInsert={onInsert} />
                <TodoList
                    todos={todos}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            </Layout>
        </>
    )
}

export default Todos
