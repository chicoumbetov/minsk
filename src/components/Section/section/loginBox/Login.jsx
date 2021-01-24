import React, { Component } from 'react'
//import { DataContext } from "../../../Context/Context"
//import '../css/Login.css'
import LoginForm from './LoginForm.jsx'
import { 
    BackDrop, TopContainer, BoxContainer, 
    LoginContainer, HeaderContainer, HeaderText, SmallText,
    InnerContainer 
} from './LoginElements.jsx'



export default class Login extends Component {

    render() {
        return (
            <LoginContainer>
                <BoxContainer>
                    <TopContainer>
                        <BackDrop />
                        <HeaderContainer>
                            <HeaderText>Welcome</HeaderText>
                            <HeaderText>Back</HeaderText>
                            <SmallText>Пожалуйста зарегистрируйтесь чтобы продолжить</SmallText>
                        </HeaderContainer>
                    </TopContainer>
                    <InnerContainer>
                        <LoginForm/>
                    </InnerContainer>
                </BoxContainer>
            </LoginContainer>

        )
    }


}