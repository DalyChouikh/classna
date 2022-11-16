import React, { useContext } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, BoldLink, Muted } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props){
    const { switchtoSignin } = useContext(AccountContext);




    return (<BoxContainer>
                <FormContainer>
                    <Input type="email" placeholder="Email" />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="password" placeholder="Password" />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="password" placeholder="Confirm Password" />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="text" placeholder="First Name" />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="text" placeholder="Last Name" />
                </FormContainer>
                    <Marginer direction="vertical" margin={15} />
                    <Marginer direction="vertical" margin="1.4em" />
                    <SubmitButton type="submit">Register</SubmitButton>
                    <Marginer direction="vertical" margin="1.4em" />
                    <Muted>Already have an account? <BoldLink href="#" onClick={switchtoSignin}>Sign in</BoldLink></Muted>
            </BoxContainer>
    );
}