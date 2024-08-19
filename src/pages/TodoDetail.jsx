import { useParams } from 'react-router-dom'

function TodoDeatail() {
    const params = useParams()

    return (
        <>
            <h1>id : {params.id}</h1>
        </>
    )
}

export default TodoDeatail
