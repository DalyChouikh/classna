import React from 'react'
import styled from 'styled-components';


const BoxContainer = styled.div`
    width : 400px;
    min-height : 750px;
    display : flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #FFFFFF;
    box-shadow: 0 0 2px 2px rgba(15, 15, 15, 0.8);
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

const BackDrop = styled.div`
    width : 140%;
    height : 650px;
    position: absolute;
    display : flex;
    flex-direction: column;
    border-radius: 50%;
    transform : rotate(60deg);
    top: -290px;
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
    line-height: 1.84;
    color: #FFFFFF;
    z-index: 10;
    margin : 0; 
`;




export function AccountBox(){
    return <BoxContainer>
                <TopContainer>
                    <BackDrop />
                    <HeaderContainer>
                        <HeaderText>Welcome</HeaderText>
                        <HeaderText>Back</HeaderText>
                    </HeaderContainer>
                </TopContainer>
            </BoxContainer>
}