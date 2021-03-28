import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import profile from "../img/profile.png";
import User from "./User";

class HeaderUser extends Component {
    render() {
        return (
            <Router>
                <div className="header-user">
                    <div className="header-account-container">
                        <img className="profile-icon" src={profile} />
                        <User></User>
                    </div>
                    <div className="header-user-shortcut-cart"></div>
                </div>
            </Router>
        );
    }
}

export default HeaderUser;
