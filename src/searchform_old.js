import React from 'react';
import CityList from './citylist';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'


class SearchForm extends React.Component {
    state = { cities: [], selectedCity: "London", selectedCode: "gb" };
  
    onFormSubmit = e => {

        e.preventDefault();

        this.setState({ selectedCity : e.target.citySelect.value })

        let cityData = { city : this.state.selectedCity, code : this.state.selectedCode };

        this.props.onSubmit(cityData);

    };

    componentDidMount() {
        window.addEventListener('load', this.getCities);
    }
    
    getCities = () => {

        axios.get( './data/city-data.json' ).then(response => {

            this.setState({ cities: response.data });
        
        });

    };

    getValue = e => {

        // console.log(this.state.cities);

        var x = this.state.cities.filter(function(city){
            return city.Country === e.target.value;
        });

        this.setState({ selectedCity: e.target.value });

        this.setState({ selectedCode: x[0].Code });

    }

    render() {
      return (
        <div className="ui container" style={{ marginTop: '10px' }}>

            <form onSubmit={this.onFormSubmit}>
                
                <select className="city-list" value={this.selectedCity} onChange={this.getValue} name="citySelect">
                    <CityList cities={this.state.cities} />
                </select>

                <input type="submit" value="convert" />

                <CityList cities={this.state.cities} onChange={this.getValue} />

            </form>
          
        </div>        
      );
    }

  }

  export default SearchForm;