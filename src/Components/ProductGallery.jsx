import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class ProductGallery extends Component {
  render() {
    const { id, name, brand, imageUrl, price, category } = this.props.product;
    return (
      <div className="col-12 col-md-3 my-2">
        <Card className="">
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body className="px-3">
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{brand}</ListGroupItem>
            <ListGroupItem>{category}</ListGroupItem>
            <ListGroupItem>{parseFloat(price).toFixed(2)}</ListGroupItem>
            <ListGroupItem>
              <Link
                className="btn btn-outline-info btn-block"
                to={`/product/${id}`}
              >
                Reviews
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    );
  }
}
