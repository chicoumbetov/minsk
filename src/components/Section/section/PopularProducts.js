import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../../Context/Context'
import '../css/Products.css'

export default class PopularProducts extends Component {

    static contextType = DataContext;

    render() {
        const { products } = this.context;
        const { cart } = this.context;
        return (
            <div>
                <h1 className="news">Популярные</h1>
                
                <div id="product">
                    {
                        products.map(product => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.src} alt="" />
                                </Link>
                                <div className="content" >
                                    <h3>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </h3>

                                    <div className="pricelinethrough">
                                        <span >{product.price} руб </span>
                                    </div>

                                    <p>{product.price2} руб </p>
                                    <button onClick={() => this.context.addCart(product._id)} cart={cart.length}>Добавить в корзину</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        )
    }
}
