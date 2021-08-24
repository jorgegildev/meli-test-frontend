import React from 'react';
import {mount, render, shallow} from 'enzyme';
import Breadcrumb from './Breadcrumb';
import Loading from './Loading';
import NotFound from './NotFound';

describe('BreadcrumbComponent', () => {

    const categories = ['Juegos de Mesa', 'Cartas'];

    it('should test', () => {
        shallow(<Breadcrumb categories={categories} />);
    });

    it('should mount', () => {
        mount(<Breadcrumb categories={categories} />);
    });

    it('should render', () => {
        render(<Breadcrumb categories={categories} />);
    });
});

describe('LoadingComponent', () => {

    it('should test', () => {
        shallow(<Loading />);
    });

    it('should mount', () => {
        mount(<Loading />);
    });

    it('should render', () => {
        render(<Loading />);
    });
});

describe('NotFoundComponent', () => {

    it('should test', () => {
        shallow(<NotFound />);
    });

    it('should mount', () => {
        mount(<NotFound />);
    });

    it('should render', () => {
        render(<NotFound />);
    });
});
