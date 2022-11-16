import { useContext } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink, Muted } from "./common";
import { Marginer } from "../marginer";

import { AccountContext } from "./accountContext";

export function LoginForm(props){
    const { switchtoSignup } = useContext(AccountContext);



    return (<BoxContainer>
                <FormContainer>
                    <Input type="email" placeholder="Email" />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="password" placeholder="Password" />
                </FormContainer>
                    <Marginer direction="vertical" margin={15} />
                    <MutedLink href="#">Forgot your password?</MutedLink>
                    <Marginer direction="vertical" margin="1.4em" />
                    <SubmitButton type="submit">Sign in</SubmitButton>
                    <Marginer direction="vertical" margin="1.4em" />
                    <Muted>Don't have an account? <BoldLink href="#" onClick ={switchtoSignup}>Sign up.</BoldLink></Muted>
            </BoxContainer>
    );
}