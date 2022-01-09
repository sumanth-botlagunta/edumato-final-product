import React, { Component } from "react";
import "./placeorder.css";
import Header from "../Header";
import "../header.css";
import Footer from "../Footer";
const url = "https://edumato977.herokuapp.com/menuitem";
const PostUrl = "https://edumato977.herokuapp.com/placeOrder";
class Placeorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100000),
      orderdata: "",
      amount: 0,
      hotel_name: this.props.match.params.restname,
      name: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[0]
        : "",
      phone: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[2]
        : "",
      email: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[1]
        : "",
      address: "",
      status: "Pending",
    };
  }
  displayorders = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div className="menu-item">
              <div className="menu-image">
                <img src={item.menu_image} alt="menu_image" />
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
                  <div className="btn btn-warning">₹{item.menu_price}</div>
                </div>
              </div>
            </div>
          </>
        );
      });
    } else {
      return (
        <>
          <div className="loading_container">
            <img
              src="https://i.ibb.co/wYvB5M5/Spinner-1s-200px.gif"
              alt="Spinner-1s-200px"
            />
          </div>
        </>
      );
    }
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  };
  handleSubmit = () => {
    fetch(PostUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    sessionStorage.setItem("name", this.state.name);
    sessionStorage.setItem("phone", this.state.name);
    sessionStorage.setItem("email", this.state.name);
    {
      this.sleep(2000);
    }
  };
  render() {
    if (!sessionStorage.getItem("userData")) {
      return (
        <div>
          <Header />
          <div className="guest">
            Login first to place booking. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
            ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
            rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
            tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
            luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
            tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
            Nullam
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <h1> your orders from the {this.props.match.params.restname}</h1>
          <form method="POST" action="https://zomatopay.herokuapp.com/paynow">
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>EmailId</label>
                    <input
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      className="form-control"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      className="form-control"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <input type="hidden" name="amount" value={this.state.amount} />
              <input type="hidden" name="id" value={this.state.id} />
            </div>
            <div className="menu">
              {this.displayorders(this.state.orderdata)}
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2>Total Cost is Rs.{this.state.amount}</h2>
              </div>
            </div>
            <button
              className="btn btn-success"
              onClick={this.handleSubmit}
              type="submit"
            >
              Checkout
            </button>
          </form>
          <Footer />
        </div>
      );
    }
  }
  componentDidMount() {
    var menuitem = sessionStorage.getItem("menuId");
    var orderId = [];
    menuitem.split(",").map((item) => {
      orderId.push(parseInt(item));
      return "ok";
    });
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderId),
    })
      .then((res) => res.json())
      .then((data) => {
        var Totalprice = 0;
        data.map((item) => {
          Totalprice = Totalprice + parseInt(item.menu_price);
          return "ok";
        });
        this.setState({ orderdata: data, amount: Totalprice });
      });
  }
}
export default Placeorder;
