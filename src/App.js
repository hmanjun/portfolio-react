import Header from './components/Header'
import React, { useState } from 'react';

export default function App() {
    const [currentPage, setCurrentPage] = useState('About')

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div className="portfolio-page">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}