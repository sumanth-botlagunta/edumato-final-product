import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import Menudisplay from './Menudisplay'

const menuurl = 'https://edumato977.herokuapp.com/menu/'

class Detailsdisplay extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menudata : ' ',
            orderdata : ' '
        }

    }

    getorderid = (data) => {
        // console.log('indetails', data)
        this.props.getorderId(data);
    }

    

    renderdetails = (restdata) => {
        // console.log(restdata);
        if(restdata){
            // console.log(restdata.image_gallery[1])             
            return (
                <div>
                    <h1>
                        {restdata.restaurant_name}
                    </h1>
                    <div className="imgslider-container">
                        <div className="imgslider">
                            <Carousel>
                            <div className='imgcontainer'>
                                <img src={restdata.image_gallery[0]} alt='restaurant_image' />
                                
                            </div >
                            <div className='imgcontainer'>
                                <img src={restdata.image_gallery[1]} alt='restaurant_image'/>
                                
                            </div>
                            <div className='imgcontainer'>
                                <img src={restdata.image_gallery[2]} alt='restaurant_image' />
                            </div>
                            </Carousel>
                        </div>
                    </div>                    
                    <div className="tabs-container">
                        <div className="tabs">
                        <Tabs>
                            <TabList>
                            <Tab>Details</Tab>
                            <Tab>Contact</Tab>
                            <Tab>Menu</Tab>
                            </TabList>

                            <TabPanel className="details">
                                <h2>{restdata.restaurant_name}</h2>
                                <div className="details-text">
                                    {restdata.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                </div>
                                <div className="rating">
                                    {restdata.average_rating}
                                </div>
                                <div className="mealtypes">
                                    <div className="btn btn-primary mealtype-name">
                                        {restdata.mealTypes[0].mealtype_name}
                                    </div>
                                    <div className="btn btn-secondary mealtype-name">
                                        {restdata.mealTypes[1].mealtype_name}
                                    </div>
                                </div>

                                <div className="cusines">
                                    <div className="btn btn-success cusine-name">
                                        {restdata.cuisines[0].cuisine_name}
                                    </div>
                                    <div className="btn btn-warning cusine-name">
                                        {restdata.cuisines[1].cuisine_name}
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className='contact'> 
                                <h2>{restdata.restaurant_name}</h2>
                                <div className="address">
                                    {restdata.address}
                                </div>
                                <div className="number">
                                    {restdata.contact_number}
                                </div>
                            </TabPanel>
                            <TabPanel className='menu-tab'>
                                <Menudisplay menudata={this.state.menudata} getorderdata={(data) => {this.getorderid(data)}}/>
                            </TabPanel>
                        </Tabs>
                        </div>
                    </div>

                </div>
            )
        }
        else {
			return(
				<>
					<div className="loading_container">
					
						<img src="https://i.ibb.co/wYvB5M5/Spinner-1s-200px.gif" alt="Spinner-1s-200px" />
						
					</div>
				</>
			)
		}
    }
    render() {
        return (
            < div className="underdisplay">
                {this.renderdetails(this.props.restdata)}
            </div>
        )
    }

    async componentDidMount() {
        let restId = this.props.restId;
        let response = await axios.get(`${menuurl}${restId}`);
        this.setState({menudata: response.data});
    }
}

export default Detailsdisplay
