import React, {useState} from 'react'
//import { Header } from '../components/Header/Header'
import { Section } from '../components/Section/Section'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    //change state from false to true & vice versa:
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            
            <Section/>
            
        </>
    )
}

export default Home