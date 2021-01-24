import React, { useContext } from 'react';
import {
    BoldLink, BoxContainer, FormContainer,
    Input, MutedLink, SubmitButton
} from './common.jsx';
import { Marginer } from '../marginer/index';
import { AccountContext } from './accountContext.js';

const LoginForm = () => {

    const { switchToSignup } = useContext(AccountContext)

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email адрес" />
                <Input type="password" placeholder="Введите пароль" />

            </FormContainer>
            <Marginer direction="vertical" margin={5} />
            <MutedLink href="#">Забыли пароль?</MutedLink>
            <Marginer direction="vertical" margin="l.6em" />

            <SubmitButton type="submit">Авторизоваться</SubmitButton>
            <Marginer direction="vertical" margin="lem" />
            <MutedLink href="#">
                Нету аккаунта? <BoldLink href="#" onClick={switchToSignup} >Зарегистрироваться</BoldLink>
            </MutedLink>
        </BoxContainer>
    )


}

export default LoginForm;