import React, { Component, Fragment } from "react";
import Search from '../components/search/search';
import ItemsList from '../components/itemsList/itemsList';

export default class ItemsListView extends Component {
    render = () => (
        <Fragment>
            <div className="meli">
                <Search query={this.props.location.search} history={this.props.history}/>
                <ItemsList query={this.props.location.search} history={this.props.history} categories={[]}/>
            </div>
        </Fragment>
    );
}
