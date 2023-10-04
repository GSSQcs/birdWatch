import { BirdProps, Bird } from './Bird.tsx';

export function ResultsContainer() {
    // TODO: connect with data from API call
    let birdArray: any[] = [
        <Bird 
        comName = 'test species'
        obsDt = 'test date'
        locName = 'test name'
        />
    ] 
    return (
        <div id='results-container'>
            <div>
                <span>
                    Species
                </span>
                <span>
                    Date
                </span>
                <span>
                    Location
                </span>
            </div>
            <div>
                {birdArray}
            </div>
        </div>
    )
}