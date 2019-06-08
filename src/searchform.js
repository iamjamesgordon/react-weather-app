import React from 'react';
import CityList from './citylist';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './searchForm.css';


class SearchForm extends React.Component {
    state = { cities: [] };

    componentDidMount() {
        window.addEventListener('load', this.getCities);
    }
    
    getCities = () => {

        axios.get( './data/city-data.json' ).then(response => {

            this.setState({ cities: response.data });
        
        });

    };

    getValue = e => {

        // console.log(e);

        let x = this.state.cities.filter(function(city){
            return city.Country === e;
        });        

        const cityData = { city : e, code : x[0].Code };

        this.props.onSubmit(cityData);

    } 
    
    render() {
      return (

        <div className="page-header" style={{ backgroundImage: "url(./images/city-bg.jpg)" }} >
            <div className="ui container">
                <Header size='large'align='center'>Select a city below</Header>
                <CityList cities={this.state.cities} change={this.getValue} />
            </div>
        </div>
          
      );
    }

  }

  export default SearchForm;