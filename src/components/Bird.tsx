import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { addBirdToWishlist, addBirdToSeenlist, removeBirdFromWishlist, removeBirdFromSeenlist } from "../store/birdsCollectionSlice";
export interface BirdProps {
    comName: string;
    obsDt: string;
    locName: string;
}

export function Bird({ comName,  obsDt, locName }: BirdProps) {

    const birdSightings = useSelector(state => state.birdSightings);
    const birdsWishlist = useSelector(state => {
        console.log('what is state',state)
        state.birdsWishlist
    });
    const [isChecked, setIsChecked] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);


    const dispatch = useDispatch();


    

    const handleRemoveFromWishlist = (e) => {
        // const newBird = birdSightings.birdSightings.filter(bird=> bird.comName === comName)
            dispatch(removeBirdFromWishlist(comName))
            setIsInWishlist(false);
    }

    const handleADDToWishlist = (e) => {

        // if(!birdSightings.birdSightings.length) return

        // console.log('boolean checklist',e.target.checked)
        // console.log('isChecked before setIsChecked', isChecked)

        // setIsChecked(e.target.checked)
       
        // console.log('isChecked after setIsChecked', isChecked);

        // //adding to collection
        // if(isChecked){
            const newBird = birdSightings.birdSightings.filter(bird=> bird.comName === comName)
            dispatch(addBirdToWishlist(newBird[0]))

            setIsInWishlist(true);

        // }
        // else {
            
        //     if(!birdsWishlist.birdsWishlist.length) return
        //     dispatch(removeBirdFromWishlist(birdsWishlist.filter(bird=> bird.comName === comName)[0]));
            
        // }
    }
    
    
    return (
        <>
         {/* <div className="bird-grid-container"> */}
            <div className="grid-item name-item">
                

                <span style={{color: isInWishlist ? 'red' : 'black'}}>
                    {comName}
                </span>
                
                {/* {!isChecked && (
                        <span style={{color:'blue'}}>
                        {comName}
                    </span>
                )} */}
            </div>
            <div className="grid-item date-item">
                <span style={{color: isInWishlist ? 'red' : 'black'}}>
                    {obsDt}
                </span>
            </div>
            <div className="grid-item location-item">
                <span style={{color: isInWishlist ? 'red' : 'black'}}>
                    {locName}
                </span>
            </div>
            {/* </div> */}
            
            <div className="span-three checkboxs">

                <button onClick={handleADDToWishlist}>Add to collection</button>
                <button onClick={handleRemoveFromWishlist}>Remove from collection</button>
            {/* <div>    */}
                {/* <span>
                    <input type='checkbox'
                        id={comName + '-wishlist'}
                        name={comName + '-wishlist'}
                        checked = {isChecked}
                        onChange={handleADDToWishlist} />
                    <label htmlFor={comName + '-wishlist'}> Add to wishlist?</label>
                </span>
            {/* </div> */}
            {/* <div> */}
                {/* <span>
                <input type='checkbox'
                        id={comName + '-seen'}
                        name={comName + '-seen'} />
                    <label htmlFor={comName + '-seen'}> Seen?</label> */}
                {/* </span> */} 
            {/* </div>  */}
            </div>
     </>
        
    )
}