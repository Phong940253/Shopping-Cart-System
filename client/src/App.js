import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./script.js";
import React from "react";

function App() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/sign-in"}></Link>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarTogglerDemo02"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-in"}>
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/sign-up"}>
                                        Sign up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={Signup} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
