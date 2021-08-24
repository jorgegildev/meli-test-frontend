import React, { Component, Fragment } from "react"
import notFoundIcon from '../../../assets/img/ic_NotFound.png';

export default class NotFound extends Component {
    render = () => (
        <Fragment>
            <div className="no-items-found">
                <div className="row">
                    <div className="col-2 mb-16 mt-16">
                        <div className="icon">
                            <img src={notFoundIcon} alt="Not found icon"/>
                        </div>
                    </div>
                    <div className="col-10 mb-16 mt-16">
                        <div className="col-12">
                            <h3 className="mt-32">No hay publicaciones que coincidan con tu búsqueda.</h3>
                        </div>
                        <div className="col-12">
                            <ul className="mb-32">
                                <li><strong>Revisá la ortografía</strong> de la palabra.</li>
                                <li>Utilizá <strong>palabras más genéricas</strong> o menos palabras.</li>
                                <li><span className="color-blue">Navegá por las categorías</span> para encontrar un producto similar</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
