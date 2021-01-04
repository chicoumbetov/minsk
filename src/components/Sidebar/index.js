import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import {
    SidebarContainer, Icon, IconShop,
    CloseIcon, SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({ toggle, isOpen}) => {
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

                    <SidebarLink to="kontakty" onClick={toggle}>
                        контакты
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                    
                    <SidebarRoute to='/cart'>
                        <IconShop>
                            <RiShoppingCartLine />
                        </IconShop>
                    </SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar