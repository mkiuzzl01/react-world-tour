import { useState } from 'react';
import './Country.css'

const Country = ({country,visitedCountriesHandlar}) => {
    const {name,flags,population,area,cca3} = country

    const [Visited,setVisite] = useState(false);

    // const clickHandelar = ()=>{
    //     setVisite(!Visited);
    // }

    // this is element its dynamically rendering
    return (
        <div className={`country ${Visited?'visited':'country'}`}>

            <h3>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h5>Area: {area}</h5>
            <h5>Code: {cca3}</h5>

            {/* <button onClick={()=>visitedCountriesHandlar(country)}>Mark Visited Country</button> */}
            <button onClick={()=>{visitedCountriesHandlar(country);setVisite(!Visited);}} className={Visited?'visited-btn':''}>{Visited? 'Visited':'Going'}</button>
            <p>{Visited ? 'I have visited this country':'I want to visit this country'}</p>
        </div>
    );
};

export default Country;