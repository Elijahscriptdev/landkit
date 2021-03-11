import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="nav-items">
                <ul>
                    <li>LandKit</li>
                </ul>
            </div>
            <div className="nav-items">
                <div className="nav-items-links">
                    <ul>
                        <li>Landings</li>
                        <li>Pages</li>
                        <li>Account</li>
                        <li>Documentation</li>
                    </ul>
                </div>
                <div className="nav-items-links">
                    <ul>
                        <li>Documentation</li>
                        <li>Buy Now</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
