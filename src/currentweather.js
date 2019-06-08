import React from 'react';
import { Message, Header } from 'semantic-ui-react';

const CurrentWeather = props => {
    
    /*console.log("Below");
    console.log(props.currentWeather);

    return <p>Current Weather Here</p>;*/

    if(props.currentWeather.length < 1) {

        return false;

    } else {

        return (

            <div className="ui container gutter">

                <Message>
                    <Header size='medium'>Current weather</Header>
                    <Message.List>
                    <Message.Item>Description: <b>{props.currentWeather.desc}</b></Message.Item>
                    <Message.Item>Humidity: <b>{props.currentWeather.hum}</b></Message.Item>
                    <Message.Item>Pressure: <b>{props.currentWeather.pressure}</b></Message.Item>
                    <Message.Item>Coordinates (Latitude): <b>{props.currentWeather.coordsLat}</b></Message.Item>
                    <Message.Item>Coordinates (Longitude): <b>{props.currentWeather.coordsLon}</b></Message.Item>
                    </Message.List>
                </Message>

            </div>
        );

    }

};
  
export default CurrentWeather;