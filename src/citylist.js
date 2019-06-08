import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const cityList = props => {

    const onChange = (event, data) => {

        props.change(data.value)
    
    };

    let x = [];
  
    props.cities.map(city => {

        return x.push({key: city.ID, text: city.Country, value: city.Country, image: { avatar: false} });

    });

    // console.log(x);
  
    return (
        <Dropdown
            placeholder='Select a city'
            fluid
            search
            selection
            onChange={onChange}
            options={x}
        />
    );
    
};
  
 export default cityList