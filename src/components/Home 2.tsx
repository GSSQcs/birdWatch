import React from "react";
import '../stylesheets/Home.css'
import SearchBar from "./SearchBar";
import { Bird } from "./Bird";
import ResultsContainer from "./ResultsContainer";
import { NavigationBar } from "./NavigationBar";



const Home = () => {

    return (
        <>
        <nav className="navbar"><NavigationBar /></nav>
        <div className="search-bar"><input type="text" placeholder="location"/>
        <SearchBar/></div>
        <div className="content">
            <ResultsContainer></ResultsContainer>
        
        </div>

        </>
    )

}


export default Home;