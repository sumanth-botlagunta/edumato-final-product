import React from "react";
const Vieworder = (props) => {
  const renderTable = ({ orderdata }) => {
    if (orderdata) {
      return orderdata.map((item) => {
        return (
          <tr>
            <td>{item.id}</td>
            <td>{item.hotel_name}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>Rs.{item.amount}</td>
            <td>{item.status}</td>
            <td>{item.bank}</td>
            <td>{item.bank_status}</td>
          </tr>
        );
      });
    }
  };
  return (
    <div>
      <center>
        <h3>Orders</h3>
      </center>
      <table className=" container-fluid table  table-striped">
        <thead className="light thead-dark">
          <tr>
            <th>Id</th>
            <th>Rest Name</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Price</th>
            <th>Status</th>
            <th>Bank</th>
            <th>Bank Status</th>
          </tr>
        </thead>
        <tbody>{renderTable(props)}</tbody>
      </table>
    </div>
  );
};
export default Vieworder;
