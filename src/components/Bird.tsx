export interface BirdProps {
    comName: string;
    obsDt: string;
    locName: string;
}

export function Bird({ comName,  obsDt, locName }: BirdProps) {
    return (
        <>
        {/* // <div className="bird grid-container"> */}
            <div>
                <span>
                    {comName}
                </span>
            </div>
            <div>
                <span>
                    {obsDt}
                </span>
            </div>
            <div>
                <span>
                    {locName}
                </span>
            </div>
            
            <div className="span-three">
            {/* <div>    */}
                <span>
                    <input type='checkbox'
                        id={comName + '-wishlist'}
                        name={comName + '-wishlist'} />
                    <label htmlFor={comName + '-wishlist'}> Add to wishlist?</label>
                </span>
            {/* </div> */}
            {/* <div> */}
                <span>
                <input type='checkbox'
                        id={comName + '-seen'}
                        name={comName + '-seen'} />
                    <label htmlFor={comName + '-seen'}> Seen?</label>
                </span>
            {/* </div>  */}
     </div>
        </>
     
        
    )
}