import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './Countries.css'


const Countries = () => {
    const [Countries,setCountries] = useState([])
    const [visitedCountries,setVisitedCountries] = useState([]);

    const visitedCountriesHandlar = country =>{
        const newCountries = [...visitedCountries,country];
        setVisitedCountries(newCountries);
    }

useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response=>response.json())
        .then(data => setCountries(data))
},[])

    return (
        // display data with element
        <div>
            <h4>Countries: {Countries.length}</h4>
            <h4>Visited-Country: {visitedCountries.length}</h4>
            <ul className="visited-country">
                {
                visitedCountries.map((visitedCountries,idx)=><li key={visitedCountries.ccn3} className="visited-country-li" >{visitedCountries.name.common}
                <div>
                    <img className="country-flag" key={idx} src={visitedCountries.flags.png} alt="" />
                </div>
                </li>)
                }
            </ul>
                
                {/* display element */}

            <div className="Countries-container">
            {
                Countries.map(country=> <Country 
                    key={country.ccn3} country = {country}
                    visitedCountriesHandlar = {visitedCountriesHandlar}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;