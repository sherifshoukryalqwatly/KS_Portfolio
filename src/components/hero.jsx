import Navbar from './navbar.jsx'
function Hero() {
    return <>
        <div className="hero d-flex flex-column">
            <Navbar />
            <div className="hero-content d-flex flex-column justify-content-center align-items-center text-center flex-grow-1"
                id='home'>
                <h1 className="display-3 fw-bold text-white fade-in">Welcome, I'm <span className="text-primary">Khaled Samir</span></h1>
                <h3 className="text-light fade-in" style={{ animationDelay: "0.5s" }}>
                    Financial <span className="text-primary fw-bold">Accountant</span>
                </h3>
                <p className="lead text-light fade-in" style={{ animationDelay: "1s" }}>
                    Experienced Accountant with a strong background in full-cycle accounting
                </p>
                <div className="mt-4 fade-in" style={{ animationDelay: "1.5s" }}>
                    <a href="#contact" className="btn btn-outline-primary btn-lg">Contact Me</a>
                </div>
            </div>
        </div>
    </>
}
export default Hero