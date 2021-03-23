import React, {Component} from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            remember: ""
        };
    }
    changeInputValue(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.name)
    }

    submitForm(event) {
        event.preventDefault()
        
        const validation = this.validationForm()
        if (validation.error)
            alert(validation.msg)
        else 
            alert('Submit form success!')
    }

    validationForm() {
        let returnData = {
            error: false,
            msg: ""
        }
        const {email, password} = this.state
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            returnData = {
                error: true,
                msg: "Không đúng định dạng email!"
            }
        }
        return returnData
    }
    
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="text">Email:</label>
                    <input className="form-control" name="email" type="email" placeholder="Enter email..." onChange={(event) => this.changeInputValue(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="text">Password:</label>
                    <input className="form-control" name="password" type="password" placeholder="Enter password..." onChange={(event) => this.changeInputValue(event)}/>
                </div>
                
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" name="remember" htmlFor="customCheck1" onChange={(event) => this.changeInputValue(event)}>Remember</label>
                    </div>
                </div>
                <button type="button" className="btnLogin" onClick={(event) => this.submitForm(event)}>
                    <span>LOG IN</span>
                </button>
                
            </form>
        );
    }
}


export default Login;