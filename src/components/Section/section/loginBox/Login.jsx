import React, { useState } from 'react'
//import { DataContext } from "../../../Context/Context"
//import '../css/Login.css'
import LoginForm from './LoginForm.jsx'
import {
    BackDrop, TopContainer, BoxContainer,
    LoginContainer, HeaderContainer, HeaderText, SmallText,
    InnerContainer, backdropVariants, expandingTransition
} from './LoginElements.jsx'
import { AccountContext } from './accountContext.js';
import SignupForm from './SignupForm.jsx';



const Login = (props) => {
    /* for expanding */
    const [isExpanded, setExpanded] = useState(false);

    /* for switching b/n signin and signup*/
    const [active, setActive] = useState("signin");

    /*Time of expanding animation */
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500)
    }

    /* Switching from signin to signup  */
    const switchToSignup = () => {
        playExpandingAnimation();

        setTimeout(() => {
            setActive("signup");
        }, 400)
    }

    /* Switching from signup to signin  */
    const switchToSignin = () => {
        playExpandingAnimation();

        setTimeout(() => {
            setActive("signin");
        }, 400)
    }

    const contextValue = { switchToSignup, switchToSignin };

    return (
        <LoginContainer>
            <AccountContext.Provider value={contextValue} >
                <BoxContainer>
                    <TopContainer>

                        {/* animation when switching b/n signin & signup*/}
                        <BackDrop
                            initial={false}
                            animate={isExpanded ? "expanded" : "collapsed"}
                            variants={backdropVariants}
                            transition={expandingTransition}
                        />

                        {active === "signin" && <HeaderContainer  >
                            <HeaderText>Welcome</HeaderText>
                            <HeaderText>Back</HeaderText>
                            <SmallText>Пожалуйста авторизуйтесь, чтобы продолжить</SmallText>
                        </HeaderContainer>}

                        {active === "signup" && <HeaderContainer  >
                            <HeaderText>Создать</HeaderText>
                            <HeaderText>аккаунт</HeaderText>
                            <SmallText>Пожалуйста зарегистрируйтесь, чтобы продолжить</SmallText>
                        </HeaderContainer>}

                    </TopContainer>
                    <InnerContainer>
                        {active === "signin" && <LoginForm />}
                        {active === "signup" && <SignupForm/>}
                        
                        {/*     Used to test animation:
                        <p onClick={playExpandingAnimation} >Нажмите сюда</p>
                        */}
                    </InnerContainer>
                </BoxContainer>
            </AccountContext.Provider>

        </LoginContainer>

    )


}

export default Login;