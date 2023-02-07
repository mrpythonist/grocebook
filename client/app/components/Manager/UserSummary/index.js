/**
 *
 * OrderSummary
 *
 */

import React, { useEffect } from "react";

import { Col } from "reactstrap";

const UserSummary = (props) => {
  const { order } = props;
  return (
    <Col className="order-summary pt-3">
      <h2>User Summary</h2>
      <div className="d-flex align-items-center summary-item">
        <p className="summary-label">User</p>
        <p className="summary-value ml-auto">
          {order.user.firstName} {order.user.lastName}
        </p>
      </div>

      <div className="d-flex align-items-center summary-item">
        <p className="summary-label">Email</p>
        <p className="summary-value ml-auto">{order.user.email}</p>
      </div>
      <div className="d-flex align-items-center summary-item">
        <p className="summary-label">Address/City</p>
        <p className="summary-value ml-auto">
          {order.address.address}, {order.address.city}
        </p>
      </div>
      <div className="d-flex align-items-center summary-item">
        <p className="summary-label">State, Country</p>
        <p className="summary-value ml-auto">
          {order.address.state}, {order.address.country}
        </p>
      </div>
      <div className="d-flex align-items-center summary-item">
        <p className="summary-label">Zip Code</p>
        <p className="summary-value ml-auto">{order.address.zipCode}</p>
      </div>
    </Col>
  );
};

export default UserSummary;
