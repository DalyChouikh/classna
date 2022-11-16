import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { AccountContext } from './accountContext';
import { LoginForm } from './loginForm';
import { SignupForm } from './signupForm';


const BoxContainer = styled.div`
    width : 400px;
    min-height : 750px;
    display : flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #FFFFFF;
    box-shadow: 0 0 3px 2px rgba(15, 15, 15, 0.8);
    position : relative;
    overflow : hidden;
    margin-top: 70px;
    @media (max-width: 768px) {
        margin-top: 0px;
        
  }
`;

const TopContainer = styled.div`
    width : 100%;
    height : 250px;
    display : flex;
    flex-direction: column;
    justify-content : flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width : 140%;
    height : 650px;
    position: absolute;
    display : flex;
    flex-direction: column;
    border-radius: 50%;
    transform : rotate(90deg);
    top: -320px;
    left: -70px;
    background: rgb(241,196,15);
    background: linear-gradient(58deg, rgba(241,196,15,1) 20%,
     rgba(243,172,18,1) 100%
    );
`; 

const HeaderContainer = styled.div`
    width : 100%;
    display : flex;
    flex-direction: column;
`;

const HeaderText = styled.h2`
    font-size : 40px;
    font-weight : 800;
    line-height: 1.0;
    color: #FFFFFF;
    z-index: 10;
    margin : 0; 
`;

const SmallText = styled.h5`
    color : #FFFFFF;
    font-weight: 550;
    font-size : 18px;
    z-index : 10;
    margin : 0;
    margin-top: 7px;
`;

const InnerContainer = styled.div`
    width : 100%;
    display : flex;
    flex-direction : column;
    padding : 0 1.8em;
    margin-top : 80px;
`;


const backdropVariants = {
    expanded : {
        width : "233%",
        height : "1190px",
        borderRadius : "20%",
        transform : "rotate(60deg)"
    },
    collapsed: {
        width : "140%",
        height : "650px",
        borderRadius: "50%",
        transform : "rotate(90deg)"
    },
};

const expadingTransition = {
    type : "spring",
    duration : 2.3,
    stiffness : 30,
};

export function AccountBox(){
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");
    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() =>{
            setExpanded(false);
        }, expadingTransition.duration * 1000 - 1500);
    };
    

    const switchtoSignup = () => {
        playExpandingAnimation();
        setTimeout(()=>{
            setActive("signup");
        }, 400);
        setActive("signin");
    };

    const switchtoSignin = () => {
        playExpandingAnimation();
        setTimeout(()=>{
            setActive("signin");
        }, 400);
        setActive("signup");
    };
    
const contextValue = {switchtoSignup, switchtoSignin};

    return (
        <AccountContext.Provider value={contextValue} >
            <BoxContainer>
                <TopContainer>
                    <BackDrop initial={false}
                              animate={isExpanded ? "expanded" : "collapsed"}
                              variants = {backdropVariants}
                              transition={expadingTransition}
                              />
                    {active === "signin" && <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back,</HeaderText>
                        <SmallText>Please sign in to continue.</SmallText> 
                    </HeaderContainer>}
                    {active === "signup" && <HeaderContainer>
                        <HeaderText>Create</HeaderText>
                        <HeaderText>Account,</HeaderText>
                        <SmallText>Please sign up to continue.</SmallText> 
                    </HeaderContainer>}
                </TopContainer>
                <InnerContainer>
                    {active === "signin" && <LoginForm />}
                    {active === "signup" && <SignupForm />}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    );
}