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
        const newTodos = [...todos, { id: lastId, todo, completed: false }]
        setTodos(newTodos)
        lastId++
    }

    const onDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id)
        setTodos(newTodos)
    }

    const onToggle = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(newTodos)
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
