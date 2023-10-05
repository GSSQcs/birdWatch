import { test, expect } from 'vitest';
// import { expect } from '@vitest/jest';

import birdsCollectionReducer, { addBirdToCollection, removeBirdFromCollection } from '../../src/store/birdsCollectionSlice';


test('birdsCollectionSlice', () => {
  const initialState = {
    birdsCollection: [],
  };


  const bird = {
    name: 'Blue Jay',
    color: 'Blue',
  };

  test('addBirdToCollection', () => {
    const newState = birdsCollectionReducer(initialState, addBirdToCollection(bird));

    expect(newState.birdsCollection).toEqual([bird]);

  });


  test('removeBirdFromCollection', () => {
    const stateWithBird = birdsCollectionReducer(initialState, addBirdToCollection(bird));

    const newState = birdsCollectionReducer(stateWithBird, removeBirdFromCollection(bird.name));

    expect(newState.birdsCollection).toEqual([]);
    

  });
});
