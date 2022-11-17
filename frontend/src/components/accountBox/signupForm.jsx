import React, { useContext, useState } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton, BoldLink, Muted } from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props){
    const { switchtoSignin } = useContext(AccountContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    const handleClick=(e) => {
        e.preventDefault();
        const student={username, password, email, firstName, lastName};
        fetch("http://localhost:8080/api/v1/students",{
            method: "POST",
            body : JSON.stringify(student),
            headers: {
                "Access-Control-Allow-Origin":"*",
                'Content-Type': "application/json"
            }
        }).then(response => {response.json()}).catch(err => {console.error(err)}); 
    }



    return (<BoxContainer>
                <FormContainer>
                    <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormContainer>
                    <Marginer direction="vertical" margin={10} />
                <FormContainer>
                    <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormContainer>
                    <Marginer direction="vertical" margin={15} />
                    
                    <SubmitButton type="submit" onClick ={handleClick}>Register</SubmitButton>
                    <Muted>Already have an account? <BoldLink href="#" onClick={switchtoSignin}>Sign in</BoldLink></Muted>
            </BoxContainer>
    );
}