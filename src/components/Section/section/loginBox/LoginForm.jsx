import React, { Component } from 'react';
import { BoldLink, BoxContainer, FormContainer, 
    Input, MutedLink, SubmitButton 
} from './common.jsx';
import { Marginer } from '../marginer/index';

class LoginForm extends Component {
    render() {
        return (
            <BoxContainer>
                <FormContainer>
                    <Input type="email" placeholder="Email адрес"/>
                    <Input type="password" placeholder="Введите пароль"/>
                    
                </FormContainer>
                <Marginer direction="vertical" margin={5} />
                <MutedLink href="#">Забыли пароль?</MutedLink>
                <Marginer direction="vertical" margin="l.6em" />
                
                <SubmitButton type="submit">Signin</SubmitButton>
                <Marginer direction="vertical" margin="lem" />
                <MutedLink href="#">
                    Нету аккаунта? <BoldLink href="#">Signup</BoldLink> 
                </MutedLink>
            </BoxContainer>
        )
    }
    
}

export default LoginForm;