import React, { Component, Fragment } from "react"

export default class Breadcrumb extends Component {

    toBack = () => this.props.history.push(this.props.search ? `/items${this.props.search}` : '/');

    render = () => (
        <Fragment>
            {this.props.withBack &&
                <button onClick={this.toBack}>
                    <span>Volver al listado | </span>{this.props.query}</button>
            }
            {( Array.isArray(this.props.categories)) ? this.props.categories.map((item, index) => {
                const latest = this.props.categories.length === index + 1;
                return (
                    <span key={index} className={latest ? 'font-weight-bold' : ''}>{item} {!latest && '> '}</span>
                );
            })  : <span className={'font-weight-bold'}>{this.props.categories}</span>}
        </Fragment>
    );
}
