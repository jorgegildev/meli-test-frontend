import React, { Component, Fragment } from "react";
import { Button } from 'reactstrap';
import Breadcrumb from '../common/breadcrumb';
import NotFound from '../common/notFound';
import MeliService from '../../services/meliService';
import Loading from '../common/loading';
import { formatPrice } from '../../utils/pureFunctions';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            categories: [],
            finish: false
        };
        this.state.categories = props.location.state ? props.location.state.categories : [];
        this.meliService = new MeliService();
    }

    componentDidMount = () => {
        this.search();
    };

    componentDidUpdate = prevProps => {
        if (prevProps.query !== this.props.query){
            this.search();
        }
    };

    search = () => {
        const itemId = this.props.match.params.id;
        this.meliService.detailItem(itemId).then(res => {
            this.setState({
                item: res.item,
                finish: true
            });
        })
    };

    renderItem = () => {
        if (!this.state.finish) {
            return (<Loading />);
        }

        if (!Object.keys(this.state.item).length) {
            return (<NotFound />);
        }

        return (
            <div className="row">
                <div className="col-8 detail-header">
                    <div className="image-container col-md-12 text-center">
                        <img alt={this.state.item.title}
                             src={this.state.item.picture} />
                    </div>
                    <h3>Descripción del producto</h3>
                    <p>{this.state.item.description}</p>
                </div>
                <div className="col-4 detail-body">
                    <p>{this.state.item.condition === 'new' ? 'Nuevo' : 'Usado'} - {this.state.item.sold_quantity} vendidos</p>
                    <h3>{this.state.item.title}</h3>
                    <h2>$ {formatPrice(this.state.item.price.amount)}</h2>
                    <Button block={true} color="primary">Comprar</Button>
                </div>
            </div>
        );
    };

    render = () => (
        <Fragment>
            <div className="row">
                <div className="col-md-8 offset-md-2 -pb-5">
                    <div className="text-left breadcrumbs">
                        <Breadcrumb categories={this.state.categories}
                                    history={this.props.history}
                                    search={this.props.location.state ? this.props.location.state.query : null}
                                    withBack={true}/>
                    </div>
                    <div className="card col-md-12 card-body detail-description">
                        {this.renderItem()}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
