import React from "react";
import '../stylesheets/Home.css'
import SearchBar from "./SearchBar";
import { Bird } from "./Bird";
import ResultsContainer from "./ResultsContainer";
import { NavigationBar } from "./NavigationBar";



const Home = () => {
    const data = ['One', 'Two', 'Three', 'Four', 'Five'];
    return (
        <>
        <nav className="navbar"><NavigationBar /></nav>
        
        <SearchBar />
        <div className="content flex-container">
            <ResultsContainer/>
        </div>

        </>
    )

}


export default Home;