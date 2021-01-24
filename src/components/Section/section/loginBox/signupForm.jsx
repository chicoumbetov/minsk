import React, {useContext} from 'react';
import { BoldLink, BoxContainer, FormContainer, 
    Input, MutedLink, SubmitButton 
} from './common.jsx';
import { Marginer } from '../marginer/index';
import { AccountContext } from './accountContext.js';

const SignupForm = (props) => {

    const { switchToSignin } = useContext(AccountContext)

    
        return (
            <BoxContainer>
                <FormContainer>
                    <Input type="email" placeholder="Email адрес"/>
                    <Input type="tel" placeholder="Телефон"/>
                    <Input type="password" placeholder="Введите пароль"/>
                    
                </FormContainer>
                <Marginer direction="vertical" margin={5} />
                
                {/*   Optional
                <MutedLink href="#">Забыли пароль?</MutedLink>
                <Marginer direction="vertical" margin="l.6em" />
                */}
                
                <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
                <Marginer direction="vertical" margin="lem" />
                <MutedLink href="#">
                    Уже есть аккаунт? <BoldLink href="#" onClick={switchToSignin}>Авторизоваться</BoldLink> 
                </MutedLink>
            </BoxContainer>
        )
    
    
}

export default SignupForm;