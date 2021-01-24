import React from 'react';
import { FaBars} from 'react-icons/fa';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Nav, NavLinks,
    NavbarContainer, 
    NavLogo, NavMenu, 
    NavItem, MobileIcon, Icon,
    NavBtn, NavBtnLink
   } from './NavbarElements';
import logo from "../../images/runner-logo.JPG";
import './Navbar.css'

const Navbar = ({toggle, cart}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/product">{<img src={logo} className="logo-image" alt="logo"/>}</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>

                        <NavItem>
                            <NavLinks to="tovary">товары</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="o-nas">о нас</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">контакты</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
                <NavBtn>
                        <NavBtnLink to="/cart" >
                            
                            <Icon>    
                                <RiShoppingCartLine />
                            </Icon>
                        </NavBtnLink>

                        <NavBtnLink to="/login" >
                            <span className="login-quantity"></span>
                            <Icon>    
                                <BsFillPersonLinesFill />
                            </Icon>
                        </NavBtnLink>
                    </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar

/* <NavBtnLink to="/cart" >
<span className="cart-quantity">{cart.length}</span>*/