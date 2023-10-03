import React from "react";
import '../stylesheets/Home.css'
import SearchBar from "./SearchBar";



const Home = () => {

    return (
        <>
        <nav className="navbar"><h2>Bird Watch</h2></nav>
        <div className="search-bar"><input type="text" placeholder="location"/>
        <SearchBar/></div>
        <div className="content">
            <div></div>
        </div>
        </>
    )

}


export default Home;