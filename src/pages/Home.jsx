import React from "react";
import Search from "../components/Search";
import CountryGrid from "../components/CountryGrid";

const Home = () => {
    return (
        // TODO: Home page
        // Render Country component (components/Country.jsx) for each country
        // Take data from (assets/CountriesData.json)
        <>
            <Search />
            <CountryGrid />
        </>
        
    );
};

export default Home;
