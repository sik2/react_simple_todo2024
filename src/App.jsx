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

    return (
        <>
            <TodoHeader />
            <TodoForm onInsert={onInsert} />
            <TodoList todos={todos} />
        </>
    )
}

export default App
