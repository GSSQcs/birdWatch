import React, {useState, useEffect} from 'react';
import { BirdProps, Bird } from './Bird.tsx';
import ResultsHeader from './ResultsHeader.tsx';
import { useSelector } from 'react-redux';

export function ResultsContainer() {
    // TODO: connect with data from API call

    const [birdArray, setBirdArray] = useState([])
    const birdSightings = useSelector(state => state.birdSightings);
    
    
    
    
/**
 * 
 * speciesCode(pin):"turvul"
comName(pin):"Turkey Vulture"
sciName(pin):"Cathartes aura"
locId(pin):"L27365483"
locName(pin):"I-10 W, Madison US-FL 30.43658, -83.51477"
obsDt(pin):"2023-10-03 17:58"
howMany(pin):1
lat(pin):30.43658
lng(pin):-83.514767
obsValid(pin):true
obsReviewed(pin):false
locationPrivate(pin):true
subId(pin):"S151365685"
 */
// const birdArray: any[] = [];
const arrayOfBirds = [];
useEffect(() => {
    
    if(birdSightings.birdSightings.length) {
    console.log('passing')
    console.log(birdSightings);



    for(let i = 0; i < 20; i++) {
        arrayOfBirds.push(
            <Bird
            comName = {birdSightings.birdSightings[i].comName}
            obsDt = {birdSightings.birdSightings[i].obsDt}
            locName = {birdSightings.birdSightings[i].locName}
            />
            )
        }
    setBirdArray(arrayOfBirds);   
    console.log('birdArray', birdArray) 
    }
}
, [birdSightings])
// if(birdSightings && birdSightings.length) {
//     console.log('passing')

//     const arrayOfBirds = [];

//     for(let i = 0; i < 20; i++) {
//         arrayOfBirds.push(
//             <Bird
//             comName = {birdSightings[i].comName}
//             obsDt = {birdSightings[i].obsDt}
//             locName = {birdSightings[i].locName}
//             />
//             )
//         }
//     setBirdArray(arrayOfBirds);   
//     console.log('birdArray', birdArray) 
//     }

        
        
    // let birdArray: any[] = [
    //     <Bird
    //     comName = 'test species'
    //     obsDt = 'test date'
    //     locName = 'test name'
    //     />
    // ] 

    


    

    return (
        <div className='grid-container'>
            <ResultsHeader/>
            {/* <div>
                <span>
                    Species
                </span>
            </div>
            <div>
                <span>
                    Date
                </span>
            </div>
            <div>
                <span>
                    Location
                </span>

            </div> */}
            {/* <div className='grid-container'> */}
                {birdArray}
            {/* </div> */}
        </div>
    )
}

export default ResultsContainer;