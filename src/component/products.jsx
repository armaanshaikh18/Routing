import React, { Component } from "react";
import { Link } from "react-router-dom";
class Products extends Component {
  //console.log(props);
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "product 1",
        },
        {
          id: 2,
          name: "product 2",
        },
        {
          id: 3,
          name: "product 3",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <h2>PRODUCT</h2>
        {this.state.products.map((data) => {
          return (
            <ul key={data.id}>
              <li>
                <Link to={`/product/${data.id}`}>{data.name}</Link>
              </li>
            </ul>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Products;
