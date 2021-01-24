import React, {useState} from 'react'
//import { DataContext } from "../../../Context/Context"
//import '../css/Login.css'
import LoginForm from './LoginForm.jsx'
import {
    BackDrop, TopContainer, BoxContainer,
    LoginContainer, HeaderContainer, HeaderText, SmallText,
    InnerContainer, backdropVariants, expandingTransition
} from './LoginElements.jsx'



const Login = (props) => {
    const [isExpanded, setExpanded] = useState(false);

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500)
    }

    return (
        <LoginContainer>
            <BoxContainer>
                <TopContainer>

                    {/* animation when switching b/n signin & signup*/}
                    <BackDrop 
                        initial={false} 
                        animate={isExpanded ? "expanded" : "collapsed"} 
                        variants={backdropVariants}
                        transition={expandingTransition}
                    />
                    
                    <HeaderContainer  >
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                        <SmallText>Пожалуйста авторизуйтесь, чтобы продолжить</SmallText>
                    </HeaderContainer>

                </TopContainer>
                <InnerContainer>
                    <LoginForm />
                    <p onClick={playExpandingAnimation} >Нажмите сюда</p>
                </InnerContainer>
            </BoxContainer>
        </LoginContainer>

    )


}

export default Login;