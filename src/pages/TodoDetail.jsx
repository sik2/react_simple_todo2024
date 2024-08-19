import { useParams } from 'react-router-dom'
import Layout from './Layout'

function TodoDeatail() {
    const params = useParams()

    return (
        <>
            <Layout>
                <h1>id : {params.id}</h1>
            </Layout>
        </>
    )
}

export default TodoDeatail
