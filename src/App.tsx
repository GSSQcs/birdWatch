import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BirdsCollectionComponent from './components/BirdsCollectionComponent';
import Home from './components/Home';
import { ResultsContainer } from './components/ResultsContainer';

function App() {
  
  return (

    <div>
      <Home></Home>
      <BirdsCollectionComponent />
  
    </div>
    
      
    
  )
}

export default App
