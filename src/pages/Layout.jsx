import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout
