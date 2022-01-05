import React, { Component } from 'react'
import Vieworder from './Vieworder'
import Header from '../Header'
import  axios  from 'axios'

const url = 'https://edumato977.herokuapp.com/viewOrder'

class ViewOrderApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Vieworder orderdata={this.state.orders} />
            </div>
        )
    }

    componentDidMount() {
        axios.get(url).then((res) => {
            this.setState({orders: res.data})
        } )
        console.log(this.state.orders.length)
    }
}

export default ViewOrderApi
