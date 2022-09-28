import React, { useState } from 'react';

import Header from './Header'
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About")

    const renderPage = () => {
        if(currentPage === "About"){
            return <About />
        }
        if(currentPage === "Portfolio"){
            return <Portfolio />
        }
        if(currentPage === "Resume"){
            return <Resume />
        }
        if(currentPage === "Contact"){
            return <Contact />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <div id="site-container">{renderPage()}</div>
            
        </div>
    )
}