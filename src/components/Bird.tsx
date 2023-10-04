export interface BirdProps {
    comName: string;
    obsDt: string;
    locName: string;
}

export function Bird({ comName,  obsDt, locName }: BirdProps) {
    return (
        <div className="bird">
            <span>
                {comName}
            </span>
            <span>
                {obsDt}
            </span>
            <span>
                {locName}
            </span>
            <span>
                <input type='checkbox'
                    id={comName + '-wishlist'}
                    name={comName + '-wishlist'} />
                <label htmlFor={comName + '-wishlist'}> Add to wishlist?</label>
            </span>
            <span>
            <input type='checkbox'
                    id={comName + '-seen'}
                    name={comName + '-seen'} />
                <label htmlFor={comName + '-seen'}> Add to wishlist?</label>
            </span>
        </div>
    )
}