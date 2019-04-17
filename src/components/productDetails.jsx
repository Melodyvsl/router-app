import React, { Component } from 'react';

class ProductDetails extends Component {
  handleSave = () => {
    this.props.history.push('/products'); //  this.props.history.replace('/products'); inja be safeye ghabl bar nemigarde
  };

  render() {
    return (
      <div>
        <h1>Product Details -{this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
