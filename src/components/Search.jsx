import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Search = () => {
    return (
        <section className="filters">
            <div className="container">
                {/* search input */}
                <div className="search-wrapper">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-regular fa-magnifying-glass search-icon"></FontAwesomeIcon>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for a country..."
                    />
                </div>
                {/* filters dropdown */}
                <div className="dropdown-wrapper">
                    <div className="dropdown-header flex flex-jc-sb flex-ai-c">
                        <span>Filter by Region</span>
                        <FontAwesomeIcon icon={faChevronDown} className="fa-regular icon"></FontAwesomeIcon> 
                    </div>
                    <div className="dropdown-body">
                        <ul>
                        <li key="all" data-region="all">All</li>
                        <li key="africe" data-region="africa">Africa</li>
                        <li key="americas" data-region="americas">Americas</li>
                        <li key="antartic" data-region="antarctic">Antarctic</li>
                        <li key="asia" data-region="asia">Asia</li>
                        <li key="europe" data-region="europe">Europe</li>
                        <li key="oceania" data-region="oceania">Oceania</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search;