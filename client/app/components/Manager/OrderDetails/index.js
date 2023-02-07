/**
 *
 * OrderDetails
 *
 */

import React, { useEffect } from "react";

import { Row, Col } from "reactstrap";

import { ROLE_ADMIN } from "../../../constants";
import OrderMeta from "../OrderMeta";
import OrderItems from "../OrderItems";
import OrderSummary from "../OrderSummary";
import UserSummary from "../UserSummary";

const OrderDetails = (props) => {
  const { order, user, cancelOrder, updateOrderItemStatus, onBack } = props;
  const isAdmin = user.role === ROLE_ADMIN;
  useEffect(() => {
    console.log(order);
  }, []);
  return (
    <div className="order-details">
      <Row>
        <Col xs="12" md="12">
          <OrderMeta order={order} cancelOrder={cancelOrder} onBack={onBack} />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs="12" lg="8">
          <OrderItems
            order={order}
            user={user}
            updateOrderItemStatus={updateOrderItemStatus}
          />
        </Col>
        <Col xs="12" lg="4" className="mt-5 mt-lg-0">
          {isAdmin ? <UserSummary order={order} /> : ""}
          <OrderSummary order={order} />
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetails;
