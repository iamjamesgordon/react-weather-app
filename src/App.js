import React from 'react';
import './App.css';
import SearchForm from './searchform';
import CurrentWeather from './currentweather';
import ForecastWeather from './forecastweather';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component {
  
  state = { currentWeather: [], forecastWeather: [], searchName: "", searchCode: "" };

  getCityData = data => {

      // console.log(data.code);

      //this.setState({ searchName: data.city, searchCode: data.code }); 
      
      this.getCurrentWeather(data.city, data.code);
      this.getForecast(data.city, data.code);


  }

  getCurrentWeather = (name, code) => {

    // console.log("Current Weather " + name + " " + code);
    
    axios.get( 'http://api.openweathermap.org/data/2.5/weather?q=' + name + ',' + code + '&appid=5f5e156b8ea6d78de2a03c42844dd4c2' ).then(response => {

      // console.log(response.data);

      let data = response.data;
      let desc = data.weather[0].description;
      let humidity = data.main.humidity;
      let pressure = data.main.pressure;
      let coordLat = data.coord.lat;
      let coordLon = data.coord.lon;

      this.setState({ currentWeather: { "desc" : desc, "hum" : humidity, "pressure" : pressure, "coordsLat" : coordLat, "coordsLon" : coordLon } });

    });

  };

  getForecast = (name, code) => {

    // console.log("Historic Weather "  + name + " " + code);

    axios.get( 'http://api.openweathermap.org/data/2.5/forecast?q=' + name + ',' + code + '&appid=5f5e156b8ea6d78de2a03c42844dd4c2' ).then(response => {

      // console.log(response.data.list);

      this.setState({ forecastWeather: response.data.list });

    });

  };

  render() {
    return (
      <div className="page-wrapper">
        <SearchForm onSubmit={this.getCityData} />

        <CurrentWeather currentWeather={this.state.currentWeather} />
        <ForecastWeather forecastWeather={this.state.forecastWeather} />

      </div>
    );
  }

}

export default App;
