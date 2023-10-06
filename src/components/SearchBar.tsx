import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { setBirdSightings } from "../store/birdSightingsSlice";
// Import dotenv variables
import dotenv from 'dotenv';



const SearchBar = ({suggestions}) => {

    dotenv.config();
    const EBIRD_API_KEY = process.env.EBIRD_API_KEY;

    const dispatch = useDispatch();

    const getBirds = (stateCode) => {
        console.log('state code', stateCode)

        const myHeaders = new Headers();
        myHeaders.append("X-eBirdApiToken", `${EBIRD_API_KEY}`);



        const requestOptions: any = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          fetch(`https://api.ebird.org/v2/data/obs/${stateCode}/recent`, requestOptions)
          .then(response => response.json()) // was .text()
          .then(result => {
            // dispatch(setBirdSightings(result.slice(0,20)))
            dispatch(setBirdSightings(result))
          })
    }

    
    return (
        <div>
        

        <div className="search-section flex-container">
            <div className="search-bar flex-container">
            {/* <input type="text" placeholder='Enter location...'/> */}
            {/* <label htmlFor="states">Choose a state:</label> */}

        <select name="states" id="states-dropdown" onChange={(e) => {getBirds(e.target.value)}}>
        <option value="">Select a state</option>
        <option value="US-AL">Alabama</option>
        <option value="US-AK">Alaska</option>
        <option value="US-AZ">Arizona</option>
        <option value="US-AR">Arkansas</option>
        <option value="US-CA">California</option>
        <option value="US-CO">Colorado</option>
        <option value="US-CT">Connecticut</option>
        <option value="US-DE">Delaware</option>
        <option value="US-DC">District of Columbia</option>
        <option value="US-FL">Florida</option>
        <option value="US-GA">Georgia</option>
        <option value="US-HI">Hawaii</option>
        <option value="US-ID">Idaho</option>
        <option value="US-IL">Illinois</option>
        <option value="US-IN">Indiana</option>
        <option value="US-IA">Iowa</option>
        <option value="US-KS">Kansas</option>
        <option value="US-KY">Kentucky</option>
        <option value="US-LA">Louisiana</option>
        <option value="US-ME">Maine</option>
        <option value="US-MD">Maryland</option>
        <option value="US-MA">Massachusetts</option>
        <option value="US-MI">Michigan</option>
        <option value="US-MN">Minnesota</option>
        <option value="US-MS">Mississippi</option>
        <option value="US-MO">Missouri</option>
        <option value="US-MT">Montana</option>
        <option value="US-NE">Nebraska</option>
        <option value="US-NV">Nevada</option>
        <option value="US-NH">New Hampshire</option>
        <option value="US-NJ">New Jersey</option>
        <option value="US-NM">New Mexico</option>
        <option value="US-NY">New York</option>
        <option value="US-NC">North Carolina</option>
        <option value="US-ND">North Dakota</option>
        <option value="US-OH">Ohio</option>
        <option value="US-OK">Oklahoma</option>
        <option value="US-OR">Oregon</option>
        <option value="US-PA">Pennsylvania</option>
        <option value="US-RI">Rhode Island</option>
        <option value="US-SC">South Carolina</option>
        <option value="US-SD">South Dakota</option>
        <option value="US-TN">Tennessee</option>
        <option value="US-TX">Texas</option>
        <option value="US-UT">Utah</option>
        <option value="US-VT">Vermont</option>
        <option value="US-VA">Virginia</option>
        <option value="US-WA">Washington</option>
        <option value="US-WV">West Virginia</option>
        <option value="US-WI">Wisconsin</option>
        <option value="US-WY">Wyoming</option>
        </select>
            {/* <button onClick={getBirds}>Search</button> */}
        </div>
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