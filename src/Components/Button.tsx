import React from 'react';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface buttonProps {
  label: string;
  variant: string;
  onPress: () => void;
}

export default function Button({label, variant, onPress}: buttonProps) {
  const backgroundColor =
    variant === 'primary' ? '#2cb9b0' : 'rgba(12,13,52,0.05)';
  const color = variant === 'primary' ? 'white' : 'black';
  return (
    <Container style={{backgroundColor}} onPress={onPress}>
      <Label style={{color}}>{label}</Label>
    </Container>
  );
}

const Container = styled(RectButton)`
  width: 245px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-family: 'SFProText-Regular';
`;

Button.defaultProps = {
  variant: 'default',
};
