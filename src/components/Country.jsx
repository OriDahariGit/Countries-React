import React from 'react'

const Country = ({data}) => {
  return (
    // TODO: Country component
    <div className="country scale-effect">
      <div className="country-flag">
        <img src={data.flag} alt={`${data.name }flag`} />
      </div>

      <div className="country-info">
        <h2 className="country-title">{data.name}</h2>
        <ul className='country-brief'>
          <li>
            <strong>Population:</strong> {data.population}
          </li>
          <li>
            <strong>Region:</strong> {data.region}
          </li>
          <li>
            <strong>Captital:</strong> {data.capital}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Country;