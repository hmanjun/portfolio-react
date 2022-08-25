import '../styles/Header.css'

export default function Header({currentPage, handlePageChange}) {
    return (
        <header id="header">
            <h3>Harshith's Portfolio</h3>
            <nav className='bg-light'>
                <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? "active" : "link"}>About</a>
                <a href="#portfolio" onClick={() => handlePageChange("Portfolio")} className={currentPage === "Portfolio" ? "active" : "link"}>Portfolio</a>
                <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? "active" : "link"}>Resume</a>
                <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? "active" : "link"}>Contact</a>
            </nav>
        </header>
    )
}