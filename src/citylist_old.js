import React from 'react';

const CityList = props => {

    // let dropDownData = [];
  
    const cities = props.cities.map(city => {
      
      return <option key={city.ID} value={city.Country}> {city.Country} </option>;

      // dropDownData = { "key": city.ID, "text": city.Country, "value": city.Country };

    });
  
    return cities;
    
  };
  
  export default CityList;