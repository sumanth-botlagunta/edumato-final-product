import React, { Component } from 'react'
import axios from 'axios';
import Listingapi from './Listingapi'
import CusineFilter from '../filters/CusineFilter'
import CostFilter from '../filters/CostFilter'
import './listing.css';
import './listdetails.css'
import Header from '../Header';
import '../header.css'


const url = 'https://edumato977.herokuapp.com/restaurant?mealtype_id='
class Listing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listing:''
        }
    }

	setDataAsPerFilter = (sortedData) =>{
        this.setState({listing:sortedData})
        console.log('sorted data >>>>',this.state.listing)
    }
    render() {
        return (
			<div>
                
                <Header />
				<div className="all_lists">
					{/* {this.renderlist(this.state.listing)} */}
					<div id="filter">
                        <CusineFilter  restPerCusinie={(data) => {this.setDataAsPerFilter(data)}}/>
                        <hr/>
                        <CostFilter restPerCost={(data) => {this.setDataAsPerFilter(data)}}/>
                        <hr/>
                    </div>
					<Listingapi listdata={this.state.listing} />
				</div>	
			</div>
        )
    }
	componentDidMount(){
		// console.log(this.props.match.params.mealtype_id);
		let mealId = this.props.match.params.mealtype_id
		sessionStorage.setItem('mealId', mealId);
		axios.get(`${url}${mealId}`)
		.then((response) => {
			this.setState({listing: response.data});
			// console.log(response.data);
		})
	}
}

export default Listing
