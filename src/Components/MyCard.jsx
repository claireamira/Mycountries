import React, { useState, useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';

const Mycard = () => {
    const location = useLocation();
    const country = location.state;
    const [sameContinentCountries, setSameContinentCountries] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${country.region}`)
            .then((response) => response.json())
            .then((data) => {
                setSameContinentCountries(data.filter(c => c.cca3 !== country.cca3));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [country.region, country.cca3]);

    return (
        <div className="container">
            <div className="card">
                <img
                    src={country.flags.svg}
                    className="card-img-top"
                    alt={`Flag of ${country.name.common}`}
                    style={{ width: '400px', height: 'auto' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <p className="card-text">Capital: {country.capital ? country.capital[0] : "N/A"}</p>
                    <p className="card-text">Region: {country.region}</p>
                    <p className="card-text">Population: {country.population.toLocaleString()}</p>
                    <p className="card-text">Coat of Arms:</p>
                    <img
                        src={country.coatOfArms.png}
                        className="card-img"
                        alt={`Coat of Arms of ${country.name.common}`}
                        style={{ width: '100px' }}
                    />
                </div>
            </div>

            <h3 className="mt-5">Other Countries in {country.region}</h3>
            <ul>
                {sameContinentCountries.map((contCountry, index) => (
                    <li key={index}>
                        <Link to='/Mycard' state={contCountry}>{contCountry.name.common}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Mycard;
