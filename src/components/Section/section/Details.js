import React, { Component } from 'react'
import { DataContext } from "../../../Context/Context"
import { Link } from 'react-router-dom'
import Colors from './Colors';
import '../css/Details.css'

export default class Details extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    //get all data in products and put into res variable
    //return only the item that we clicked filtered by id and put it into data variable
    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            console.log(data)
            this.setState({ product: data })
        }
    }

    componentDidMount() {
        this.getProduct();
    }

    render() {
        console.log(this.props.match.params.id)
        console.log(this.context.products)

        const { product } = this.state;

        return (
            <>
                <div className="wholeblock">
                    {
                        product.map(item => (
                            <div className="details" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box" >
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span className="linethrough">${item.price}</span>
                                        <span>${item.price2}</span>
                                    </div>

                                    <Colors colors={item.colors} />

                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <Link to="/cart" className="cart">
                                        Add to cart
                                </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </>
        )
    }
}
