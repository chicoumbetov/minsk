import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BoxContainer = styled.div`
    width: 280px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 2cm;
`

export const BackDrop = styled(motion.div)`
    width: 160%;
    height: 500px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -70px;
    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    )
`

export const HeaderContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 50px;
`;

export const HeaderText = styled.h2`
        font-size: 25px;
        line-weight: 600;
        line-height: 1.24;
        color: #fff;
        z-index: 10;
        margin: 0;
`

export const SmallText = styled.h5`
        color: #fff;
        font-weight: 500;
        font-size: 11px;
        z-index: 10;
        margin: 0;
        margin-top: 7px;
`

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`

export const backdropVariants = {
    expanded: {
        width: "223%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

export const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}