import { Link } from 'react-router-dom'

function TodoListItem({ todo, onDelete, onToggle }) {
    return (
        <li
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
            }}
        >
            <input
                onClick={() => onToggle(todo.id)}
                type="checkbox"
                checked={todo.completed}
            />
            {todo.id} / <Link to={`/todos/${todo.id}`}>{todo.todo}</Link> /
            <button onClick={() => onDelete(todo.id)}>🗑️</button>
        </li>
    )
}

export default TodoListItem
