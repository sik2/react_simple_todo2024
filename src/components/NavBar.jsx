import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div
                style={{
                    backgroundColor: '#f0f0f0',
                    padding: '10px',
                    textAlign: 'center',
                }}
            >
                <Link
                    style={{
                        margin: '0 15px',
                        textDecoration: 'none',
                        color: '#333',
                    }}
                    to="/"
                >
                    홈
                </Link>
                <Link
                    style={{
                        margin: '0 15px',
                        textDecoration: 'none',
                        color: '#333',
                    }}
                    to="/todos"
                >
                    TODOLIST
                </Link>
            </div>
        </>
    )
}

export default NavBar
