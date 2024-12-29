import React from "react";

import { faCircleNotch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useSearchParams } from "react-router-dom";

import CountryDetails from "../components/CountryDetails";


const Details = ({data}) => {
    const [params] = useSearchParams();
    const countryName = params.get('country');
    const countryData = data.filter(obj => {
        return obj.name.toLowerCase() === countryName.toLowerCase();
    })[0];

    return (
        <>
            {/* Loader */}
            {/* <div className="loader">
                <div className="spinner">
                    <FontAwesomeIcon icon={faCircleNotch} className="fa-regular fa-spin icon"></FontAwesomeIcon>
                </div>
            </div> */}

            <div className="back-button">
                <div className="container">
                    <Link to="/index.html" className="btn btn-back btn-with-icon">
                        <FontAwesomeIcon icon={faArrowLeft} className="fa-regular icon"></FontAwesomeIcon>
                        back
                    </Link>
                </div>
            </div>

            <main className="main">
                <CountryDetails data={countryData} />
            </main>
        </>

    )
}

export default Details;