import React from "react";
import { useDispatch } from "react-redux";
import { addBirdToCollection } from "../store/birdsCollectionSlice";

interface BirdsCollectionProps {
    name: string;
  }

const BirdsCollectionComponent: React.FC<BirdsCollectionProps> = (props: object) => {

    const dispatch = useDispatch();

    const handleADDToCollection = () => {
        const newBird = {
            name: 'blue jay',
            color: 'blue'
        }

        dispatch(addBirdToCollection(newBird))
    }

    return (
        <div>
            <h1>Hello</h1>
            <p>{(props as BirdsCollectionProps).name}</p>
            <button onClick={handleADDToCollection}>Add to Collection</button>
        </div>
    )
}

export default BirdsCollectionComponent;