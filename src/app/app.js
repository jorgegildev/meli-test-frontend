import React, { Fragment, Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import '../assets/scss/meli.scss';
import SearchView from "./views/searchView";
import ItemsListView from "./views/itemsListView";
import ItemView from "./views/itemView";

export default class App extends Component {

  render() {
    return (
        <Fragment>
          <Router>
            <Switch>
                <Route exact path="/" component={SearchView}/>
                <Route exact path="/items" component={ItemsListView}/>
                <Route exact path="/items/:id" component={ItemView}/>
            </Switch>
          </Router>
        </Fragment>
    );
  }

}
