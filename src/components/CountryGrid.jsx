import { Link } from 'react-router-dom';
import Country from "./Country";

const CountryGrid = ({data}) => {

    console.log();
    return (
        <main className="main">
            <div className="container">
                <section id="countries-grid" className="countries-grid">
                    {data.map( (country, index) => {
                        return (
                            <Link to={`/country-info?country=${country.name}`} key={index}>
                                <Country data={country} />
                            </Link>
                        )
                    })}
                </section>
            </div>
        </main>
    )
}

export default CountryGrid;