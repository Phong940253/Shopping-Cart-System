import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import search from "../img/search.png";
import("../css/FormSearch.css");
class FormSearch extends Component {
    render() {
        return (
            <div className="form-search-root">
                <div className="form-search-form">
                    <input
                        type="text"
                        data-view-id="main_search_form_input"
                        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                        className="form-search-input"
                    ></input>
                    <button
                        data-view-id="main_search_form_button"
                        className="form-search-button"
                    >
                        <img className="icon-search" src={search} />
                        Tìm Kiếm
                    </button>
                </div>
            </div>
        );
    }
}

export default FormSearch;
