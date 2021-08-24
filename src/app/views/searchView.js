import React, { Component } from "react";
import Search from '../components/search/search';

export default class SearchView extends Component {
    render = () =>{
        return (
            <div className="meli">
                <Search query={this.props.location.search} history={this.props.history}/>
            </div>
        );
    }
}
