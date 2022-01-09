import React, { Component } from "react";
import Vieworder from "./Vieworder";
import Header from "../Header";
import axios from "axios";
import Footer from "../Footer";
const url = "https://edumato977.herokuapp.com/viewOrder";
const url1 = "https://edumato977.herokuapp.com/updateOrder";
class ViewOrderApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: "",
    };
  }
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
    }
    return (
      <div>
        <Header />
        <Vieworder orderdata={this.state.orders} />
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    if (this.props.location) {
      var qparams = this.props.location.search;
      if (qparams) {
        var data = {
          status: "Delivered",
          date: qparams.split("&")[2].split("=")[1],
          bank_status: qparams.split("&")[0].split("=")[1],
          bank: qparams.split("&")[3].split("=")[1],
        };
        var id = qparams.split("&")[1].split("=")[1].split("_")[1];
        fetch(`${url1}/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
    }
    axios
      .get(`${url}?email=${sessionStorage.getItem("userData").split(",")[1]}`)
      .then((res) => {
        this.setState({ orders: res.data });
      });
  }
}
export default ViewOrderApi;
