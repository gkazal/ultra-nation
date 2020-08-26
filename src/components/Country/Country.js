import React from 'react';

const Country = (props) => {
    const { name, population, area, region, flag } = props.country
    const flagStyle = { height: '50px' }
    const countryStyle = {border:'1px solid red', margin: '10px',padding: '10px'}

    const handleAddCountry = props.handleAddCountry // handleAddCountry k recive korlam

    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={flag} alt="" />
            <h3>Country Name: {name}</h3>
            <h5>Country Population:{population}</h5>
            <p>Country Area: {area}</p>
            <p>Region: {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>add Country</button>
        </div>
    );
};

export default Country;