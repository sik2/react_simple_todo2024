function TodoList() {
    return (
        <>
            <ul>
                <li>
                    1
                    <input type="checkbox" />
                    아이템
                    <button>🗑️</button>
                </li>
                <li>
                    {' '}
                    2
                    <input type="checkbox" />
                    아이템
                    <button>🗑️</button>
                </li>
                <li>
                    {' '}
                    3
                    <input type="checkbox" />
                    아이템
                    <button>🗑️</button>
                </li>
            </ul>
        </>
    )
}

export default TodoList
