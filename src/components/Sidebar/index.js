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
                    <SidebarLink to="krossovki" onClick={toggle}>
                        кроссовки
                    </SidebarLink>

                    <SidebarLink to="muzhskie" onClick={toggle}>
                        мужские
                    </SidebarLink>

                    <SidebarLink to="zhenskie" onClick={toggle}>
                        женские
                    </SidebarLink>

                    <SidebarLink to="aksessuary" onClick={toggle}>
                        аксессуары
                    </SidebarLink>

                    <SidebarLink to="shipping-and-payment" onClick={toggle}>
                        доставка и оплата
                    </SidebarLink>

                    <SidebarLink to="blog" onClick={toggle}>
                        блог
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