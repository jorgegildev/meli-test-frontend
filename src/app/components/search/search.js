import React, { Component, Fragment } from "react";
import logoImg from '../../../assets/img/Logo_ML.png';
import searchIcon from '../../../assets/img/ic_Search.png';
import {formatKeyword} from "../../utils/pureFunctions";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.placeholder = 'Nunca dejes de buscar';
        this.state = {
            query: {keyword: formatKeyword(this.props.query)},
        };
    }

    toBack = () => this.props.history.push('/');

    onKeyChange = (keyword) => {
        this.setState({query: {keyword}});
    }

    onKeyPress = (key) => {
        if (key.charCode === 13){
            this.searchItem(key);
        }
    }

    searchItem = (event) => {
        event.preventDefault();
        if (this.state.query.keyword) {
            this.props.history.push(`/items?search=${this.state.query.keyword}`);
        }
    }

    render = () => (
           <Fragment>
               <div className="meli-header">
                <div className="row">
                    <div className="col-2 col-sm-1 col-md-1 offset-md-2">
                        <img src={logoImg} onClick={this.toBack} alt="logo" className="clickable"/>
                    </div>
                    <div className="col-9 offset-1 col-sm-10 col-md-7 offset-md-0">
                        <div className="input-group">
                            <input placeholder={this.placeholder} type="text" onKeyPress={this.onKeyPress}
                                   onChange={event => this.onKeyChange(event.target.value)}
                                   className="input-search form-control f-18" defaultValue={this.state.query.keyword}/>
                            <div className="input-group-append">
                                <button type="button" className="btn-search btn btn-secondary" onClick={this.searchItem}>
                                    <img src={searchIcon} alt="search"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
           </Fragment>
    )
}
