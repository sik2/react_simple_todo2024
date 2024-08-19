import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todos from './pages/Todos'
import TodoDeatail from './pages/TodoDetail'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/todos" element={<Todos />}></Route>
                <Route path="/todos/:id" element={<TodoDeatail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
