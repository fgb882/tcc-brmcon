import Borda from '../components/borda'
import Clientes from '../components/clientes'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'

function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Borda />
            <Clientes />
            <Footer />
        </div>
    )
}


export default Home