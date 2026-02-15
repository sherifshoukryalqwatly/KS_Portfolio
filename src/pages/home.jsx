import Hero from "../components/hero.jsx"
import About from "../components/about.jsx"
import Skills from "../components/skills.jsx"
import Contact from "../components/contact.jsx"
import Experiance from "../components/experiance.jsx"
function Home() {
    return <>
        <div>
            <Hero/>
            <div className="container-fluid">
                <About/>
                <Experiance/>
                <Skills/>
                <Contact/>
            </div>
        </div>
    </>
}

export default Home