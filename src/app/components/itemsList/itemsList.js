import React, { Component, Fragment } from "react";
import Breadcrumb from '../common/breadcrumb';
import NotFound from '../common/notFound';
import MeliService from '../../services/meliService';
import { formatPrice, formatKeyword } from '../../utils/pureFunctions';
import shippingIcon from '../../../assets/img/ic_shipping.png';
import Loading from '../common/loading';

export default class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.meliService = new MeliService();
        this.state = {
            items: [],
            categories: [],
            foundItems: false
        };
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
        if (formatKeyword(this.props.query)) {
            this.meliService.searchItems(formatKeyword(this.props.query)).then(res => {
                this.setState({
                    categories: res.categories || [],
                    items: res.items || [],
                    foundItems: true
                });
            });
        }
    };

    goItemDetail = item => {
        this.props.history.push({
            pathname: `/items/${item.id}`,
            state: {
                categories: this.state.categories,
                query: this.props.query,
            }
        });
    };

    renderItemList = () => {

        if (!this.state.foundItems) {
            return (<Loading />);
        }

        if (!this.state.items.length) {
            return (<NotFound />);
        }


        return this.state.items.map((item, index) => {
            return (
                <div key={index} className="d-flex detail-content">
                    <div className="thumbnail" onClick={() => this.goItemDetail(item)}>
                        <img src={item.picture} alt={item.title} />
                    </div>
                    <div className="info">
                        <div className="d-inline-flex">
                            <h3>$ { formatPrice(item.price.amount) }</h3>
                            {item.free_shipping && <img src={shippingIcon}
                                  className="shipping-icon"
                                  title="Envío gratis a todo el país"
                                  alt="Free Shipping" />}
                        </div>
                        <p onClick={() => this.goItemDetail(item)}>{item.title}</p>
                    </div>
                </div>
            );
        });
    };

    render = () => (
        <Fragment>
            <div className="row">
                <div className="col-md-8 offset-md-2 pb-5">
                    <div className="text-left breadcrumbs">
                        <Breadcrumb categories={this.state.categories}/>
                    </div>
                    <div className="card col-md-12 card-body">
                        <div className="row">
                            <div className="col-md-12 detail-list">
                                {this.renderItemList()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
