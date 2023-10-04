import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setBirdSightings } from "../store/birdSightingsSlice";



const SearchBar = ({suggestions}) => {

    const dispatch = useDispatch();

    const getBirds = () => {


        const myHeaders = new Headers();
  myHeaders.append("X-eBirdApiToken", `3ad9r5c0g9c1`);

        const requestOptions: any = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
        
          fetch("https://api.ebird.org/v2/data/obs/US/recent", requestOptions)
          .then(response => response.json()) // was .text()
          .then(result => {
            
            dispatch(setBirdSightings(result.slice(0,20)))
          })

    }

    
    return (
        <div className="search-section flex-container">
            <div className="search-bar flex-container">
            <input type="text" placeholder='Enter location...'/>
            <button onClick={getBirds}>Search</button>
        </div>
        </div>

        
        
    )
    // const [userInput, setUserInput] = useState('');
    // const [suggestions, setSuggestions] = useState([]);
    // const [selectedRegion, setSelectedRegion] = useState('');
  
    // const handleInputChange = (e) => {
    //   const value = e.target.value;
    //   setUserInput(value);
  
    //   fetch(`https://api.opencagedata.com/geocode/v1/json?q=${value}&key=API key`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.results) {
    //         const matchingRegions = data.results.map((result) => result.formatted);
    //         setSuggestions(matchingRegions);
    //       } else {
    //         setSuggestions([]);
    //       }
    //     });
    // };
  
    // const handleSuggestionClick = (region) => {
    //   setUserInput(region);
    //   setSelectedRegion(region);
    //   setSuggestions([]);
    // };
  
    // return (
    //   <div>
    //     <input
    //       type="text"
    //       placeholder="Type a region..."
    //       value={userInput}
    //       onChange={handleInputChange}
    //     />
    //     <ul>
    //       {suggestions.map((region, index) => (
    //         <li key={index} onClick={() => handleSuggestionClick(region)}>
    //           {region}
    //         </li>
    //       ))}
    //     </ul>
    //     <p>Selected Region: {selectedRegion}</p>
    //   </div>
    // );
}

export default SearchBar