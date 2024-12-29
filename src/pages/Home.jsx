import React from "react";
import Search from "../components/Search";
import CountryGrid from "../components/CountryGrid";


// const dataLoad = await rawData.json();



const Home = ({data}) => {
    return (
        // TODO: Home page
        // Render Country component (components/Country.jsx) for each country
        // Take data from (assets/CountriesData.json)
        <>
            <Search />
            <CountryGrid data={data} />
        </>
        
    );
};

export default Home;
