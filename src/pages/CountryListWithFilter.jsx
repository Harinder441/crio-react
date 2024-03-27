import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountryListWithFilter = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(term)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="country-list-filter">
      {error && <div>Error: {error}</div>}

      <input
        type="text"
        placeholder="Search country"
        value={searchTerm}
        onChange={handleSearch}
      />
      
      <div className="country-container">
        {filteredCountries.map(country => (
          <div key={country.cca3} className="countryCard country-item">
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryListWithFilter;
