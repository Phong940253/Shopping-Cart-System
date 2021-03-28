import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import hamburger from "../img/hamburger-menu.png";
import arow from "../img/arow.png";
import("../css/MenuButton.css");
class MenuButton extends Component {
    render() {
        return (
            <Router>
                <div className="style-wrapper">
                    <Link className="menu-button">
                        <img className="hamburger-menu" src={hamburger} />
                        <div className="wrap">
                            <span>Danh Mục</span>
                            <span className="text-icon">
                                Sản Phẩm
                                <img src={arow} />
                            </span>
                        </div>
                    </Link>
                </div>
            </Router>
        );
    }
}

export default MenuButton;
