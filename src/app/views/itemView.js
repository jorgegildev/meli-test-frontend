import React, { Component, Fragment } from "react";
import Search from '../components/search/search';
import Item from "../components/item/item";

export default class ItemView extends Component {
    render = () => {
        const state = this.props.location.state;
        return (
        <Fragment>
            <div className="meli">
                <Search query={state ? state.query : ''} history={this.props.history}/>
                <Item location={this.props.location} match={this.props.match} history={this.props.history}/>
            </div>
        </Fragment>
        );
    };
}
