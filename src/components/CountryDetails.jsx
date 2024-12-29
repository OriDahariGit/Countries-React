const CountryDetails = ({data}) => {
    return (
        <div id="details" className="container">
            <section className="country-details">
                {/* flag div */}
                <div className="country-flag">
                    <img src={data.flag} alt={`${data.name}'s flag`} />
                </div>
                {/* country info */}
                <div className="country-info">
                    {/* country heading */}
                    <h1>{data.name}</h1>
                    {/* detail */}
                    <div className="col-2">
                        {/* details left */}
                        <ul key='left'>
                            <li key='1'>
                                <strong>Native Name:</strong> {data.name.nativeName || data.name}
                            </li>
                            <li key='2'>
                                <strong>Population:</strong> {data.population.toLocaleString()}
                            </li>
                            <li key='3'>
                                <strong>Region:</strong> {data.region}
                            </li>
                            <li key='4'>
                                <strong>Sub Region:</strong> {data.subRegion || 'no sub region'}
                            </li>
                            <li key='5'>
                                <strong>Capital:</strong> {data.capital}
                            </li>
                        </ul>

                        {/* details right */}
                        <ul key='right'>
                            <li key='1'>
                                <strong>Top Level Domain:</strong> {data.tld || 'None'}
                            </li>
                            <li key='2'>
                                <strong>Currencies:</strong> {data.currencies || 'None'}
                            </li>
                            <li key='3'>
                                <strong>Top Level Domain:</strong> {data.language || 'None'}
                            </li>
                        </ul>
                    </div>

                    {/* borders */}
                    <ul className="col-3">
                        <strong>Border Countries: </strong>
                        {/* TODO: add li borders */}
                        <li key='#'>
                            <button type="button" className="btn">Example</button>
                        </li> 
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default CountryDetails;