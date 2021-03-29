import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArrawIcon from "../img/arow.png";

class UserShortcut extends Component {
    render() {
        return (
            <Router>
                <span className="user-style-item-text">
                    <span className="user-style-no-wrap">
                        {this.props.isLogin
                            ? "Tài Khoản"
                            : "Đăng Nhập / Đăng Ký"}
                    </span>
                    <span className="account-label">
                        <span>
                            {this.props.isLogin ? this.props.name : "Tài Khoản"}
                        </span>
                        <img className="arrow-icon" src={ArrawIcon} />
                    </span>
                </span>
            </Router>
        );
    }
}

UserShortcut.defaultProps = {
    name: "",
    isLogin: false,
};

export default UserShortcut;
