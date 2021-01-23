import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {
    SidebarContainer, Icon, IconShop,
    CloseIcon, SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute, Span
} from './SidebarElements';

const Sidebar = ({ toggle, isOpen, cart }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to="tovary" onClick={toggle}>
                        товары
                    </SidebarLink>

                    <SidebarLink to="o-nas" onClick={toggle}>
                        о нас
                    </SidebarLink>

                    <SidebarLink to="/contact" onClick={toggle}>
                        контакты
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>

                    <SidebarRoute to='/cart'>
                        {/*<Span>{cart.length}</Span>*/}
                        <IconShop>
                            <RiShoppingCartLine />
                        </IconShop>
                    </SidebarRoute>

                    <SidebarRoute to='/login'>
                        {/*<Span>{cart.length}</Span>*/}
                        <IconShop>
                            <BsFillPersonLinesFill />
                        </IconShop>
                    </SidebarRoute>


                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar