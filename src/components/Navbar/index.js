import React from 'react';
import { FaBars} from 'react-icons/fa';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Nav, NavLinks,
    NavbarContainer, 
    NavLogo, NavMenu, 
    NavItem, MobileIcon, Icon,
    NavBtn, NavBtnLink
   } from './NavbarElements';
import logo from "../../images/minsk.png";

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">{<img src={logo} alt="logo"/>}</NavLogo>
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
                            <NavLinks to="kontakty">контакты</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/cart">
                            <Icon>
                                <RiShoppingCartLine />
                            </Icon>
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
