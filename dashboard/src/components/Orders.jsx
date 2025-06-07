import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []); // only run once

  return (
    <div className="orders">
      <p>Your Orders: {allOrders.length}</p>

      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/orders"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        allOrders.map((order, index) => (
          <div key={index} className="order-card">
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Quantity:</strong> {order.qty}</p>
            <p><strong>Price:</strong> ₹{order.price}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
