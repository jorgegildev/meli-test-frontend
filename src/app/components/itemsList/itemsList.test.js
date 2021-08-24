import React from 'react';
import {mount, render, shallow} from 'enzyme';
import ItemsList from './ItemsList';

describe('ItemsListComponent', () => {

    const props = {
        location: {
            pathname: "/items",
            search: "?search=cartas",
            hash: "",
            key: "sh8fai"
        },
        query: "?search=casa",
        history: {
            length: 2,
            action: "PUSH",
            location: {
                pathname: "/items",
                search: "?search=cartas",
                hash: "",
                key: "sh8fai"
            }
        },
        categories: []
    }

    it('should test', () => {
        shallow(<ItemsList query={props.location.search} history={props.history} categories={props.categories} />);
    });

    it('should mount', () => {
        mount(<ItemsList query={props.location.search} history={props.history} categories={props.categories} />);
    });

    it('should render', () => {
        render(<ItemsList query={props.location.search} history={props.history} categories={props.categories} />);
    });
});
