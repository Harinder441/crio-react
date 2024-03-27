import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        
        const data = response.data;
        setCountries(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <div>Error: {error}</div>}
  
      <div class="country-container">
        {countries.map(country => (
          <div key={country.cca3} class="country-item">
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            <h5>{country.name.common}</h5>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryList;
