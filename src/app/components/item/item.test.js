import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Item from './item';

describe('ItemComponent', () => {

    const props = {
        match: {
            params: {
                id: 'MLA831020849'
            }
        },
        location: {
            state: {
                categories: ['Juegos de Mesa', 'Cartas']
            }
        },
        history: {}
    };

    it('should test', () => {
        shallow(<Item location={props.location} match={props.match} history={props.history} />);
    });

    it('should mount', () => {
        mount(<Item location={props.location} match={props.match} history={props.history} />);
    });

    it('should render', () => {
        render(<Item location={props.location} match={props.match} history={props.history} />);
    });
});
