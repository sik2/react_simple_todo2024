import { useEffect, useState } from 'react'
import TodoHeader from './components/TodoHeader'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: '할일1', checked: true },
        { id: 2, text: '할일2', checked: true },
        { id: 3, text: '할일3', checked: false },
    ])

    let lastId = todos.length + 1

    const onInsert = (text) => {
        const newTodos = [...todos, { id: lastId, text, checked: false }]
        setTodos(newTodos)
        lastId++
    }

    const onDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id)
        setTodos(newTodos)
    }

    const onToggle = (id) => {
        const newTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
        setTodos(newTodos)
    }

    return (
        <>
            <TodoHeader />
            <TodoForm onInsert={onInsert} />
            <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
        </>
    )
}

export default App
