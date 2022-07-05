import React, { Component } from "react";

class ProductList extends Component {
    productList = this.props.prod.map((pr)=>
    <tr>
        <td>{pr.pid}</td>
        <td>{pr.pname}</td>
        <td>{pr.price}</td>
    </tr>
    )
    render(){
        return(
            <div>
                <h2>Product Component</h2>
    <table>
        <thead>
            <th>PID</th>
            <th>PNAME</th>
            <th>PRICE</th>
        </thead>
        <tbody>
           {this.productList}
        </tbody>
    </table>
            </div>

        );
    }
}

export default ProductList;