import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import cartIcon from "../img/cart.png";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
    }
    render() {
        return <span className="num-cart-item">{this.state.number}</span>;
    }
}

class ShortcutCart extends Component {
    render() {
        return (
            <Router>
                <div className="header-user-shortcut-cart">
                    <Link>
                        <div className="user-style-item">
                            <div className="cart-wrapper">
                                <img className="cart-icon" src={cartIcon} />
                                <CartItem></CartItem>
                            </div>
                            <span>Giỏ hàng</span>
                        </div>
                    </Link>
                </div>
            </Router>
        );
    }
}

export default ShortcutCart;
