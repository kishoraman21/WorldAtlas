import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getSingleCountry } from "../../api/postApi";
import Loader from "../UI/Loader";

export default function CountryDetails() {  
    const params = useParams();
    console.log(`param id:`, params);
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        startTransition(async () => {
            const res = await getSingleCountry(params.id);
            console.log(res);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }


        });

    }, []);

    if (isPending) return <Loader />;

    // if(!country || !country.name || !country.name.common) return <h1>Country not found</h1>; 
    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box">
                <div className="country-image grid  grid-two-cols">
                    <img src={country.flags?.svg} alt={country.flags?.alt} className="flag" />

                    <div className="country-content">
                        <p className="card-title">{country.name?.official}</p>
                        {/* right side div */}
                        <div className="infocontainer">
                            <p>
                                <span className="card-description">Native Names:</span> {country.name?.common}
                            </p>
                            <p>
                                <span className="card-description">Population:</span> {country.population?.toLocaleString()}
                            </p>
                            <p>
                                <span className="card-description">Region:</span> {country.region}
                            </p>
                            <p>
                                <span className="card-description">Sub Region:</span> {country.subregion}
                            </p>
                            <p>
                                <span className="card-description">Capital:</span> {country.capital}
                            </p>
                            <p>
                                <span className="card-description">Top Level Domain:</span> {country.tld}
                            </p>
                            <p>
                                <span className="card-description">Currencies:</span> {country.currencies?.[Object.keys(country.currencies)[0]].name}
                            </p>
                            <p>
                                <span className="card-description">Languages:</span>
                                {country.languages ? Object.values(country.languages).map((lang, index) => (
                                    <span key={index}>{lang}</span>
                                )) : "No languages available"}
                            </p>


                        </div>
                       <div className="country-card-backBtn">
                        <NavLink to="/country" className="backBtn">
                            <button>
                                Go Back
                            </button>
                        </NavLink>
                       </div>
                    </div>
                    
                </div>

            </div>
        </section>
    )
}