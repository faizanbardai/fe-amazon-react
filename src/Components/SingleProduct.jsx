import React, { Component } from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";

export default class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [] };
  }
  render() {
    const {
      brand,
      category,
      description,
      imageUrl,
      name,
      price
    } = this.state.product;

    return (
      <Container fluid className="my-2">
        <Row>
          <Col xs="12" md="4">
            <Image src={imageUrl} rounded fluid/>
          </Col>
          <Col xs="12" md="8">
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                {name}
              </ListGroup.Item>
              <ListGroup.Item as="li">{brand}</ListGroup.Item>
              <ListGroup.Item as="li">{description}</ListGroup.Item>
              <ListGroup.Item as="li">{category}</ListGroup.Item>
              <ListGroup.Item as="li">{price}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs="12" md="4"></Col>
        </Row>
      </Container>
    );
  }
  componentDidMount = async () => {
    const productID = this.props.match.params.id;
    const response = await fetch(
      process.env.REACT_APP_BASEURL + "/products/" + productID,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const product = await response.json();
    this.setState({
      product: product
    });
  };
}
