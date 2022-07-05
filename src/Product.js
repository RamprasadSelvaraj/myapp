import React, { Component } from "react";
import ProductList from "./ProductList";

class Product extends Component {
    product = [{"pid":1, "pname": 'Laptop', "price": '43500'},
        {"pid":2, "pname": 'Printer', "price": '16500'},
        {"pid":3, "pname": 'Keyboard', "price": '3200'},
        {"pid":4, "pname": 'Headset', "price": '9000'},
        {"pid":5, "pname": 'Wireless Mouse', "price": '1200'}];

    render(){
        return(
            <div>
                <h2>Product Component</h2>
                <ProductList prod={this.product}/>
            </div>
        );
    }
}

export default Product;