import React, { useState, useEffect } from "react";

const LocationSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    country: "",
    state: "",
    city: ""
  });

  useEffect(() => {
    fetchCountries();
  }, []);
  useEffect(() => {
    selectedLocation.country && fetchStates();
  }, [selectedLocation.country]);

  useEffect(() => {
    selectedLocation.state && fetchCities();
  }, [selectedLocation.state]);
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://crio-location-selector.onrender.com/countries");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStates = async () => {
    try {
      const response = await fetch(`https://crio-location-selector.onrender.com/country=${selectedLocation.country}/states`);
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await fetch(`https://crio-location-selector.onrender.com/country=${selectedLocation.country}/state=${selectedLocation.state}/cities`);
      const data = await response.json();
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedLocation((prevLocation) => ({
      ...prevLocation,
      country: country,
      state: "",
      city: ""
    }));
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedLocation((prevLocation) => ({
      ...prevLocation,
      state: state,
      city: ""
    }));
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedLocation((prevLocation) => ({
      ...prevLocation,

      city: city
    }));
  };

  return (
    <div className="location-selector-container">
      <h1>Location Selector</h1>
      <div className="location-selector-container-2"> 
      <div>
        <select id="country" value={selectedLocation.country} onChange={handleCountryChange}>
          <option value=""> Select Country </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select id="state" value={selectedLocation.state} onChange={handleStateChange} disabled={!selectedLocation.country}>
          <option value=""> Select State </option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select id="city" value={selectedLocation.city} onChange={handleCityChange} disabled={!selectedLocation.state}>
          <option value=""> Select City </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      </div>

      {selectedLocation.country && selectedLocation.state && selectedLocation.city && (
        <p>
          You selected {selectedLocation.city}, {selectedLocation.state}, {selectedLocation.country}
        </p>
      )}
    </div>
  );
};

export default LocationSelector;
