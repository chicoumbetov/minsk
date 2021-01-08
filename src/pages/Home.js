import React, { useState, useContext } from 'react'
import { Section } from '../components/Section/Section'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { DataContext } from '../Context/Context'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {cart} = useContext(DataContext);
    //change state from false to true & vice versa:
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} cart={cart}/>
            <Navbar toggle={toggle} cart={cart}/>
            <Section />
        </>

    )
}

export default Home