import React, { useState } from 'react';

const XDictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === term);

    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult('Word not found in the dictionary.');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
     <p>Definition: {searchResult || "Word not found in the dictionary."}</p>
    </div>
  );
};

export default XDictionary;
