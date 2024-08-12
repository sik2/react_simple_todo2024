import { useEffect, useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(1)
    })

    return (
        <>
            <h2>오늘의 할 일</h2>
            <form>
                <input type="text" />
                <button>입력</button>
            </form>
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

export default App
