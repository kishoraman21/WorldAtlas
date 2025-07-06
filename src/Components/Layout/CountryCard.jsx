import {NavLink} from "react-router-dom";
export const CountryCard = ({ country }) => {
    const { name, flags, population, region, capital } = country;
    // console.log(`common:`,name.common);   
    return (
        <li className="country-card card ">
            <div className="container-card bg-white-box">
                <img src={flags.svg} alt={flags.alt} />


                <div className="countryInfo">
                    <p className="card-title">{name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}</p>
                    <p><span className="card=-description">Population:</span> {population.toLocaleString()}</p>
                    <p><span className="card=-description">Region:</span> {region}</p>
                    <p><span className="card=-description">Capital:</span> {capital[0]}</p>
                </div>

                <NavLink to={`/country/${name.common}`}>
                    <button>
                        Read More
                    </button>
                </NavLink>

            </div>

        </li>
    )
}