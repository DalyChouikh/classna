import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink, Muted } from "./common";
import { Marginer } from "../marginer";

import { AccountContext } from "./accountContext";

export function LoginForm(props){
    const { switchtoSignup } = useContext(AccountContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick=(e) => {
        e.preventDefault();
        const student={username, password }
        fetch(`http://localhost:8080/api/v1/students/${username}`,{
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin":"*",
            }
        }).then(response => {response.json()}).catch(err => {console.error(err)});
    }

    return (<BoxContainer>
                <FormContainer>
                    <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormContainer>
                    <Marginer direction="vertical" margin={15} />
                    <MutedLink href="#">Forgot your password?</MutedLink>
                    <Marginer direction="vertical" margin="1.4em" />
                    <SubmitButton type="submit" onClick={handleClick} >Sign in</SubmitButton>
                    <Marginer direction="vertical" margin="1.4em" />
                    <Muted>Don't have an account? <BoldLink href="#" onClick ={switchtoSignup}>Sign up.</BoldLink></Muted>
            </BoxContainer>
    );
}