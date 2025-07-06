export default function SearchFilter({ search, setSearch, filter, setFilter, countries, setCountries }) {



    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    const handleSelectChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    }

    const sortCounties = (order) => {
        const sortedCountries = [...countries].sort((a, b) => {
            if (order === "asc") {
                return a.name.common.localeCompare(b.name.common);
            } else {
                return b.name.common.localeCompare(a.name.common);
            }
        });
        setCountries(sortedCountries);
    }

    return (
        <section className="section-searchFilter container">
            <div>
            <input type="text" placeholder="Search " value={search} onChange={handleInputChange} />
            </div>


            <div>
                <button onClick={() => sortCounties("asc")}>Asc</button>

            </div>

            <div>
                <button onClick={() => sortCounties("desc")}>Desc</button>
            </div>

            <div>
                <select className="select-section" value={filter} onChange={handleSelectChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}