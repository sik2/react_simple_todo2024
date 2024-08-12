function TodoListItem({ todo, onDelete, onToggle }) {
    return (
        <li
            style={{
                textDecoration: todo.checked ? 'line-through' : 'none',
            }}
        >
            <input
                onClick={() => onToggle(todo.id)}
                type="checkbox"
                checked={todo.checked}
            />
            {todo.id} / {todo.text} /{' '}
            <button onClick={() => onDelete(todo.id)}>🗑️</button>
        </li>
    )
}

export default TodoListItem
