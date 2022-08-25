import React, { useState } from 'react';

export default function Header(prop) {
    
    return (
        <div className="d-flex bg-secondary">
            <nav>
                <ul className="page-anchors">
                    <button className='ms-2' onClick={prop.handlePageChange("About")}>About Me</button>
                    <button className='ms-2' onClick={prop.handlePageChange("Portfolio")}>Portfolio</button>
                    <button className='ms-2' onClick={prop.handlePageChange("Resume")}>Resume</button>
                    <button className='ms-2' onClick={prop.handlePageChange("Contact")}>Contact</button>
                </ul>
            </nav>
        </div>
    )
}