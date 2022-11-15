import './App.css';
import styled from 'styled-components';
import React from 'react';
import { AccountBox } from './components/accountBox';

const Container = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;


function App() {
  return (
    <Container>
      <AccountBox />
    </Container>
  );
}

export default App;
