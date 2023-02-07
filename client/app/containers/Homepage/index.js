/**
 *
 * Homepage
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";

import actions from "../../actions";

class Homepage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchStoreBrands();
  }
  render() {
    const { brands } = this.props;
    return (
      <div className="homepage">
        <Row className="">
          <div className="backImg">
            <div className="col-6 bannerTxt">
              Order groceries for delivery or pickup today
            </div>
            <div className="col-6">
              Whatever you want from local stores, brought right to your door.
            </div>
          </div>
        </Row>
        <Row>
          <div className="textunderbanner">
            Choose your store in<span className="pakistan">Pakistan</span>
          </div>
        </Row>
        <Row className="stores">
          {brands.slice(0, 6).map((brand, index) => (
            <div className="col-4">
              <Card className="storecard" style={{ width: "18rem" }}>
                <a className="storelink">
                  <Link to={`/shop/brand/${brand.slug}`}>
                    <CardBody className="cardbody">
                      <img
                        height="50px"
                        alt="Sample"
                        src="/images/pwa.png"
                        className="storeImg"
                      />
                      <CardTitle className="cardtitle" tag="h5">
                        {brand.name}
                        <CardSubtitle>
                          <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            fill="#0AAD0A"
                            xmlns="http://www.w3.org/2000/svg"
                            color="brandPrimaryRegular"
                            class="css-oe4vh5"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.535 4.32c.478-1.615-1.657-2.671-2.65-1.31L5.24 12.115c-.723.99-.016 2.384 1.212 2.384H11l-1.535 5.18c-.478 1.614 1.657 2.67 2.65 1.31l6.645-9.106c.723-.991.015-2.384-1.212-2.384H13l1.535-5.18z"
                            ></path>
                          </svg>
                          <span className="fast_delivery">Fast Delivery</span>
                        </CardSubtitle>
                      </CardTitle>
                    </CardBody>
                  </Link>
                </a>
              </Card>
            </div>
          ))}
        </Row>

        <Row className="SeeAllRow">
          <a>
            <Link to={"/brands"}>
              <span className="seeAllLink">See All </span>
            </Link>
          </a>
        </Row>
        <Row>
          <div className="textunderstores">
            Groceries delivery you can count on
          </div>
        </Row>

        <Row>
          <div className="col-4">
            <Card
              className="cards"
              style={{
                width: "22rem",
              }}
            >
              <CardBody className="cardsbody">
                <CardTitle className="cardstitle">
                  Choose what you want
                </CardTitle>
                <CardText className="cardstext">
                  Select items from your favorite grocery stores at
                  Instacart.com or in the app.
                </CardText>
                <img
                  height="214px"
                  width="100%"
                  alt="Sample"
                  src="/images/cards/card1.jpg"
                />
              </CardBody>
            </Card>
          </div>

          <div className="col-4 ">
            <Card
              className="cards"
              style={{
                width: "22rem",
              }}
            >
              <CardBody className="cardsbody">
                <CardTitle className="cardstitle">
                  Choose what you want
                </CardTitle>
                <CardText className="cardstext">
                  Select items from your favorite grocery stores at
                  Instacart.com or in the app.
                </CardText>
                <img
                  height="214px"
                  width="100%"
                  alt="Sample"
                  src="/images/cards/card2.jpg"
                />
              </CardBody>
            </Card>
          </div>

          <div className="col-4 ">
            <Card
              className="cards"
              style={{
                width: "22rem",
              }}
            >
              <CardBody className="cardsbody ">
                <CardTitle className="cardstitle">
                  Choose what you want
                </CardTitle>
                <CardText className="cardstext">
                  Select items from your favorite grocery stores at
                  Instacart.com or in the app.
                </CardText>
                <img
                  height="214px"
                  width="100%"
                  alt="Sample"
                  src="/images/cards/card3.jpg"
                />
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row className="button_of_cards">
          <Link to={"/shop"}>
            <Button className="cardbutton">Start Shopping</Button>
          </Link>
        </Row>
        <Row>
          <div className="textunderstartshopping">
            The world's largest online grocery service
          </div>
        </Row>
        <Row>
          <img className="img2" alt="Sample" src="/images/cards/img2.jpg" />
        </Row>
        <Row className="smallcardsrow">
          <div className="col-3 smallcards">
            <p className="smallcardstitle">500 million products</p>
            <p className="smallcardssubtitle">
              Available to shop across the catalog
            </p>
          </div>
          <div className="col-3 smallcards">
            <p className="smallcardstitle">Variety of Stores</p>
            <p className="smallcardssubtitle">
              From local stores to chain stores options
            </p>
          </div>
          <div className="col-3 smallcards">
            <p className="smallcardstitle">Multiple cities</p>
            <p className="smallcardssubtitle">
              Served across multiple cities and regions
            </p>
          </div>
          <div className="col-3 smallcards">
            <p className="smallcardstitle">Millions of Orders</p>
            <p className="smallcardssubtitle">
              Delivery or picked up both accepted
            </p>
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brand.storeBrands,
  };
};

export default connect(mapStateToProps, actions)(Homepage);
