import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import './topcover.css'

const locationurl = 'https://edumato977.herokuapp.com/location';
const resturl = 'https://edumato977.herokuapp.com/restaurant?stateId=';

class Topcover extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: '',
            restaurant: ''
        }

    }

    renderCity = (data) => {
        // console.log(data)
        if(data){
            return data.map((item) => {
                return <option value={item.state_id} className='city-option' key={item.state_id}>{item.state}</option> ;
            })
        }
    }

    handleCity = (event) => {
        // console.log(event.target.value);
        const stateId = event.target.value;
        fetch(`${resturl}${stateId}`)
        .then((res) => res.json())
        .then((data) =>{
            this.setState({restaurant: data});
        })
    }

    renderrest = (data) => {
        // console.log(data)
        if(data){
            return data.map((item) => {
                return <option value={item.restaurant_id} className='rest-option' >{item.restaurant_name} || {item.address}</option> ;
            })
        }
    }
    

    handleRestaurants = (event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }

    render() {
    return (
        <div>
            <div className="top-container" id="topcover">
                <div className="container-fluid">
                <div className="d-inline-block user-icon"><i className="fa fa-user"></i></div>
                </div>
                <div className="logo-container">
                    <div className="logo">
                        ZOMATO
                    </div>
                </div>
                <div id="dropdown">
                    <select id="city" name="city" className="location-dropdown"onChange={this.handleCity}>
                        <option> ---- SELECT LOCATION ---- </option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restaurants" name="restaurants" className="restaurant-dropdown" onChange={this.handleRestaurants}>
                        {this.renderrest(this.state.restaurant)}
                    </select>
                </div>
        </div>
        </div>
    
       
    )
    }

    componentDidMount(){
        fetch(locationurl)
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Topcover);
