import CountriesData from '../assets/CountriesData.json';
import Country from "./Country";

const CountryGrid = () => {
    return (
        <main className="main">
            <div className="container">
                <section id="countries-grid" className="countries-grid">
                    {CountriesData.map( (country, index) => {
                        return <Country key={index} data={country} />
                    })}
                </section>
            </div>
        </main>
    )
}

export default CountryGrid;