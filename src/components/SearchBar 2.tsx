import React, { useState } from 'react';


const SearchBar = () => {
    const [userInput, setUserInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setUserInput(value);
  
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${value}&key=API key`)
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            const matchingRegions = data.results.map((result) => result.formatted);
            setSuggestions(matchingRegions);
          } else {
            setSuggestions([]);
          }
        });
    };
  
    const handleSuggestionClick = (region) => {
      setUserInput(region);
      setSelectedRegion(region);
      setSuggestions([]);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Type a region..."
          value={userInput}
          onChange={handleInputChange}
        />
        <ul>
          {suggestions.map((region, index) => (
            <li key={index} onClick={() => handleSuggestionClick(region)}>
              {region}
            </li>
          ))}
        </ul>
        <p>Selected Region: {selectedRegion}</p>
      </div>
    );
}

export default SearchBar