import React from 'react';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Title>mdsfbnfsdm fsdfndmf fmdsnfm,d</Title>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: cyan;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 24px;
  font-family: 'SFProText-Regular';
`;
