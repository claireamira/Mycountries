import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContinentPage = () => {
    const { continent } = useParams();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${continent}`)
            .then(response => response.json())
            .then(data => {
                setCountries(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [continent]);

    return (
        <div className="container mt-5">
            <h1>Countries in {continent}</h1>
            <div className="row">
                {countries.map((country, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <div className="card">
                            <img
                                src={country.flags.svg}
                                className="card-img-top"
                                alt={`Flag of ${country.name.common}`}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{country.name.common}</h5>
                                <p className="card-text">Capital: {country.capital ? country.capital[0] : "N/A"}</p>
                                <p className="card-text">Region: {country.region}</p>
                                <p className="card-text">Population: {country.population.toLocaleString()}</p>
                                <Link to='/Mycard' state={country} className="btn btn-primary">View More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContinentPage;
