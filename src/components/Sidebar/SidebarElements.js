import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;

opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; /*if isOpen is true then visible 100%, if false then it is not visible*/
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-sez: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #01bf71;
        transitions: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    
    outline: none;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
    }
`

export const IconShop = styled.div`
    color: #fff;
    height: 30px;
    display: flex;
    align: right;
    cursor: pointer;
    font-size: 25px;
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #01bf71;
        transition: all 0.2s ease-in-out;
    }
`

export const Span = styled.span`
position: absolute;
top: 22px;
right: 28px;
background: crimson;
font-size: 10px;
color: white;
padding: 3px 5px;
border-radius: 50%;
z-index: -1;
display: flex;
justify-content: center;
`