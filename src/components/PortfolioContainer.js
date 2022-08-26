import React, { useState } from 'react';

import Header from './Header'
import About from './About';
import Portfolio from './Portfolio';

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
            return
        }
        if(currentPage === "Contact"){
            return
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}