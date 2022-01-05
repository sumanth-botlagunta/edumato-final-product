import React, { Component } from 'react';
import './menudisplay.css'

class Menudisplay extends Component {
    constructor(props){
        super(props)
    }

    orderId = [];

    addtocart = (id) => {
        this.orderId.push(id);
        // console.log('Order Id >>>>', this.orderId);
        this.props.getorderdata(this.orderId);

    }

    displaymenu = (data) => {
        if(data){
            // console.log(data);
            return data.map((item) => {
                return (
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={item.menu_image} alt='menu_image' />
                        </div>
                        <div className="menu-details">
                            <div className="menu-name">{item.menu_name}</div>
                            <div className="menu-text">{item.description}</div>
                            <div className="menu-type">
                                <div className="btn btn-outline-primary">
                                    {item.menu_type}
                                </div>
                            </div>
                            <div className="menu-price">
                                <div className="btn btn-warning">
                                ₹{item.menu_price}
                                </div>
                            </div>                           
                            <div className="add-cart">
                                <div className="add add-no btn btn-danger">+1</div>
                                <button className="add add-text btn btn-success" onClick={() => {this.addtocart(item.menu_id)}}>Add to cart</button>
                                <div className="add add-no btn btn-danger">-1</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
                <div className="menu">
                    {this.displaymenu(this.props.menudata)}
                </div>
        )
    }
}

export default Menudisplay
