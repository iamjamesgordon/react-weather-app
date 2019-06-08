import React from 'react';
import { Header, Table, Message } from 'semantic-ui-react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const ForecastWeather = props => {

    console.log(props.forecastWeather);

    const forecastData = props.forecastWeather;

    // const uniqueDays = Array.from(new Set(forecateData.dt));

    ///////////////////////////////////////////////////////////

    const j = [];

    forecastData.map(forecast => {

        let dateTime = forecast.dt_txt.split(" ", 8);

        return j.push(dateTime[0]);

    });

    const uniqueDays = Array.from(new Set(j));

    console.log(uniqueDays);

    ///////////////////////////////////////////////////////////

    const forecasTable = uniqueDays.map((item1, index) => {
        return (
            <div key={item1}>

                <Header key={item1} align='center' size='small'>{item1}</Header>

                <Table fluid striped>

                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Time</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Humidity</Table.HeaderCell>
                    <Table.HeaderCell>Pressure</Table.HeaderCell>
                    <Table.HeaderCell>Wind Speed</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>

              { 

                forecastData.map(item2 => {

                    let dateTime = item2.dt_txt.split(" ", 8);
                    
                    if(dateTime[0] === item1) {

                        return (
                            <Table.Row key={item2.dt}>
                                <Table.Cell>{dateTime[1]}</Table.Cell>
                                <Table.Cell>{item2.weather[0].description}</Table.Cell>
                                <Table.Cell>{item2.main.humidity}</Table.Cell>
                                <Table.Cell>{item2.main.pressure}</Table.Cell>
                                <Table.Cell>{item2.wind.speed}</Table.Cell>
                            </Table.Row>
                        )

                    } else {

                        return false;

                    }

                })      
                
              }

             </Table.Body>
            </Table>
            </div>
          )
    });

    ///////////////////////////////////////////////////////////

    if(props.forecastWeather.length < 1) {

        return false;

    } else {

        return (

            <div className="ui container gutter">
                <Message>
                    <Header size='medium'>Forecast</Header>
                        <AliceCarousel
                        duration={400}
                        autoPlay={false}
                        startIndex = {1}
                        fadeOutAnimation={true}
                        mouseDragEnabled={true}
                        playButtonEnabled={false}
                        dotsDisabled={true}
                        autoPlayDirection="rtl"
                        autoPlayActionDisabled={true}
                        >
                        {forecasTable}
                        </AliceCarousel>
                </Message>
            </div>

        );

    }
  
};
  
export default ForecastWeather;