function TodoListItem({ todo }) {
    return (
        <li
            style={{
                textDecoration: todo.checked ? 'line-through' : 'none',
            }}
        >
            <input type="checkbox" checked={todo.checked} />
            {todo.id} / {todo.text} / <button>🗑️</button>
        </li>
    )
}

export default TodoListItem
