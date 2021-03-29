import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import profile from "../img/profile.png";
import UserShortcut from "./ShortcutUser";
import ShortcutCart from "./ShortcutCart";

class HeaderUser extends Component {
    render() {
        return (
            <Router>
                <div className="header-user">
                    <div className="header-account-container">
                        <img className="profile-icon" src={profile} />
                        <UserShortcut></UserShortcut>
                    </div>
                    <ShortcutCart></ShortcutCart>
                </div>
            </Router>
        );
    }
}

export default HeaderUser;
