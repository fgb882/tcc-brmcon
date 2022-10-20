import Borda from '../components/borda'
import Clientes from '../components/clientes'
import Footer from '../components/footer'
import Forms from '../components/forms'
import Hero from '../components/hero'
import Navbar from '../components/navbar'

function Home() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Borda />
            <Clientes />
            <Forms />
            <Footer />
        </div>
    )
}


export default Home