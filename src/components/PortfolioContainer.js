import React, { useState } from 'react';

import Header from './Header'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("About")

    const renderPage = () => {
        if(currentPage === "About"){
            return
        }
        if(currentPage === "Portfolio"){
            return
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