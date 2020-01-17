import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductGallery from "./ProductGallery";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import SingleProduct from "./SingleProduct";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { products: null };
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <Router>
          <NavigationBar />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/" exact>
            <Container fluid className="row d-flex justify-content-around">
              {products ? (
                products.rows.map(product => (
                  <ProductGallery product={product} key={product.id} />
                ))
              ) : (
                <Loader
                  type="Circles"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              )}
            </Container>
          </Route>
        </Router>
      </>
    );
  }
  componentDidMount = async () => {
    const response = await fetch(
      process.env.REACT_APP_BASEURL + "/products?limit=8",
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const products = await response.json();
    console.log(products.count);
    this.setState({
      products: products
    });
  };
}
