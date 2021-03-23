import React, {Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {index: 1, title: "Phong"};
    }
    changeColor() {
        var title = document.getElementById("title");
        ReactDOM.findDOMNode(title).style.color = "red";
    }
    changeTitle() {
        this.setState({
            title: "Vi "
        });
    }
    countDown() {
        this.setState({
            index: this.state.index - 1
        });
    }
    countUp() {
        this.setState((prevState, props) => {
            return {
                index: this.state.index + 1
            }
        });
    }
    
    render() {
        const {num1, num2} = this.props
        return (
            <div>
                <h1 id="title">{this.state.title}</h1>
                <button onClick={() => {
                    this.changeColor(); 
                    this.changeTitle()
                }}>Change Color</button>
                <h1>{num1} + {num2} = {num1 + num2}</h1>
                <p>Gia tri: {this.state.index}</p>
                <button onClick={() => {
                    this.setState({
                        index: this.state.index + 1
                    })
                }}>Tăng</button>
                <button onClick={() => {
                    this.setState({
                        index: this.state.index - 1
                    })
                }}>Giảm</button>
                
            </div>
        );
    }
}

Welcome.defaultProps = {
    num1: 1,
    num2: 3
}

Welcome.propType = {
    num1: PropTypes.number,
    num2: PropTypes.number
}

export default Welcome;