import Aos from "aos"
import "aos/dist/aos.css"
import Header from "./components/Header"
import { useEffect } from "react"
import Navigation from "./components/Navigation"
import Banner from "./components/Banner"
import Profile from "./components/Profile"
import Portofolio from "./components/Portofolio"
import Footer from "./components/Footer"

function App() {
    useEffect(()=>{
    Aos.init()
    },[])
    return <div>
        <Header/>
        <Navigation />
        <Banner/>
        <Profile />
        <Portofolio/>
        <Footer/>
        </div>
}

export default App
