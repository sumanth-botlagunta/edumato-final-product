import React, { Component } from 'react'
import axios from 'axios'
import './details.css'
import Detailsdisplay from './Detailsdisplay';
import './menudisplay.css'
import Header from '../Header'
import '../header.css'

const detailsurl = 'https://edumato977.herokuapp.com/details/';

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restdata : '',
            cartitems : ''
        }
    }

    orderId = []
    restId = this.props.match.params.restId;

    setorderId = (data) => {
        // console.log("in details set", data)
        this.orderId = data;
        this.setState({cartitems : this.orderId})
        // console.log("orderId ..", this.orderId)
        // this.setState({orderId: data})
        // console.log('orderId >>> ', this.state.orderId);
        console.log(this.props);
    }

    proceed = () => {
        this.props.history.push(`/placeorder/${this.state.restdata.restaurant_name}`);
        sessionStorage.setItem('menuId', this.orderId)
        sessionStorage.setItem('restId' , this.restId)
    }

    render() {
        return (
            <div>
                <Header/>
               <Detailsdisplay restdata={this.state.restdata} restId={this.restId} getorderId = {(data) => {this.setorderId(data)}} />
               <button className="btn btn-success proceed" onClick={this.proceed}>
                   Order Items
               </button>
            </div>
        )
    }

    // componentDidMount() {
    //     // console.log(this.props.match.params.restId)
    //     let restId = this.props.match.params.restId;
    //     axios.get(`${detailsurl}${restId}`)
    //     .then((res) => {
    //     //    console.log(res.data[0])
    //     this.setState({restdata : res.data[0]})
    //     })
    // }

    async componentDidMount() {
        let restId = this.props.match.params.restId;
        let response = await axios.get(`${detailsurl}${restId}`)

        this.setState({restdata : response.data[0]})
    }


}

export default Details;
