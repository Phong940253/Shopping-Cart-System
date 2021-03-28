import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import("../css/banner.css");
const Navbar = () => {
    return (
        <Router>
            <div className="header">
                <div className="container">
                    <div className="middle_wrap">
                        <div className="middle_left_container">
                            <div className="logo_menu">
                                <div className="style_logo">
                                    <Link className="logo no-underline">
                                        <b className="logo no-underline">
                                            SHOP
                                        </b>
                                    </Link>
                                </div>
                                <MenuButton></MenuButton>
                            </div>
                            <div className="form_search"></div>
                        </div>
                        <div className="header_user"></div>
                    </div>
                </div>
                <div className="bottom_root"></div>
            </div>
        </Router>
    );
};

export default Navbar;
