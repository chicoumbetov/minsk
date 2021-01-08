import React, { Component } from 'react'
import { DataContext } from "../../../Context/Context"
import Colors from './Colors';
import '../css/Details.css'
import '../css/Cart.css'
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }

    render() {
        const { cart, increase, reduction, removeProduct, total } = this.context;
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center" }}>No Product</h2>
        } else {
            return (
                <>
                    <div className="wholeblock">
                        {
                            cart.map(item => (
                                <div className="details" key={item._id}>
                                    
                                    <div className="delete-detail">
                                        <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                                    </div>
                                    
                                    <div>
                                        <img src={item.src} alt="" />
                                    </div>

                                    <div className="box" >
                                        <div className="row">
                                            <h2>{item.title}</h2>
                                            <div>
                                                <span className="linethrough">${item.price * item.count}</span>
                                                <span>${item.price2 * item.count}</span>
                                            </div>

                                        </div>

                                        <Colors colors={item.colors} />

                                        <p>{item.description}</p>
                                        <p>{item.content}</p>
                                        <div className="amount">
                                            <button className="count" onClick={() => reduction(item._id)}> - </button>
                                            <span>{item.count}</span>
                                            <button className="count" onClick={() => increase(item._id)}> + </button>
                                        </div>
                                    </div>


                                </div>
                            ))
                        }
                    </div>
                    <div className="total-block">
                        <div className="total">
                            <Link to="/payment">Payment</Link>
                            <h3>Total: $ {total}</h3>
                        </div>
                    </div>

                </>
            )
        }

    }
}
