import React, { useState } from 'react';

export default function Header(prop) {
    
    return (
        <div className="d-flex flex-column align-items-center m-2">
            <nav>
                <ul className="page-anchors">
                    <button className='ms-2' onClick={prop.handlePageChange("About")}>About Me</button>
                    <button className='ms-2' onClick={prop.handlePageChange("Portfolio")}>Portfolio</button>
                    <button className='ms-2' onClick={prop.handlePageChange("Resume")}>Resume</button>
                    <button className='ms-2' onClick={prop.handlePageChange("Contact")}>Contact</button>
                </ul>
            </nav>
            <h3>Harshith's Portfolio</h3>
        </div>
    )
}