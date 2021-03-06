import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import Contact from './section/Contacts'
import { Route } from 'react-router-dom'
import Cart from './section/Cart'
import Login from './section/loginBox/Login.jsx'
import Payment from './section/Payment'

export class Section extends Component {

    render() {

        return (
            <section>
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} exact />
                <Route path="/contact" component={Contact} exact />
                <Route path="/cart" component={Cart} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/payment" component={Payment} exact />
            </section>
        )
    }
}

export default Section