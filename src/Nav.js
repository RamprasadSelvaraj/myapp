import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return(
            <div>
                <div>
                    <ul>
                        <Link to="/Home">HOME</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/Courses">Courses</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/HOC">HOC</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/ConditionalComp">CONDITION</Link>&nbsp;&nbsp;&nbsp;
                        <Link to="/AxiosDemo">Axios Demo</Link>&nbsp;&nbsp;&nbsp;
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;