import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            console.log('Search query is empty');
            return;
        }
        navigate(`/search/${searchQuery}`);
        setSearchQuery('');
    };
    
    return (
        <>
            <header className="site-header">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: "blueviolet", padding: '15px' }}>
                    <div className="container">
                        <Link className="navbar-brand mr-4" to="/" style={{ fontSize: '2.0em' }}>World Countries</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggle" style={{ color: 'white' }}>
                            <div className="navbar-nav ms-auto" style={{ textAlign: 'right' }}>
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Continents
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/continent/Africa">Africa</Link></li>
                                        <li><Link className="dropdown-item" to="/continent/Americas">Americas</Link></li>
                                        <li><Link className="dropdown-item" to="/continent/Asia">Asia</Link></li>
                                        <li><Link className="dropdown-item" to="/continent/Europe">Europe</Link></li>
                                        <li><Link className="dropdown-item" to="/continent/Oceania">Oceania</Link></li>
                                    </ul>
                                </div>
                                <form className="d-flex" onSubmit={handleSearchSubmit}>
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                    />
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
                <br />
                <br />
            </header>
        </>
    );
};

export default Navbar;
