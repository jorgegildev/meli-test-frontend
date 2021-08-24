import React from 'react';
import {mount, render, shallow} from 'enzyme';
import Search from './Search';

describe('SearchComponent', () => {

    const props = {
        location: {
            pathname: "/",
            search: "?search=cartas",
            hash: "",
            key: "sh8fai"
        },
        history: {
            length: 2,
            action: "PUSH",
            location: {
                pathname: "/",
                search: "?search=cartas",
                hash: "",
                key: "sh8fai"
            }
        },
    }

    it('should test', () => {
        shallow(<Search query={props.location.search} history={props.history} />);
    });

    it('should mount', () => {
        mount(<Search query={props.location.search} history={props.history} />);
    });

    it('should render', () => {
        render(<Search query={props.location.search} history={props.history} />);
    });

});
