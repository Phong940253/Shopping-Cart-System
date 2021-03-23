import React, {Component} from "react";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
            <form>

                <div className="form-group">
                    <label htmlFor="text">Full Name</label>
                    <input className="form-control" placeholder="Enter fullname..." onChange={(event) => this.changeInputValue(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="text">Email:</label>
                    <input className="form-control" type="email" placeholder="Enter fullname..." onChange={(event) => this.changeInputValue(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Password:</label>
                    <input className="form-control" type="password" placeholder="Enter password..."/>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Re-password:</label>
                    <input className="form-control" type="password" placeholder="Enter password..."/>
                </div>
                <button type="button" className="btnLogin btnSignUp"><span>SIGN UP</span>
                </button>
                
            </form>
        );
    }
}


export default Signup;