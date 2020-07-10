import React from 'react';
import styled from 'styled-components/native';

import {width, height} from '../../../utils/constants';

interface slideProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  right: boolean;
}

export default function Slide({title, right}: slideProps) {
  return (
    <Container>
      <LabelContainer
        style={{
          transform: [
            {translateY: (0.61 * height - 100) / 2},
            {translateX: right ? width / 2 - 50 : -width / 2 + 50},
            {rotate: right ? '90deg' : '-90deg'},
          ],
        }}>
        <Label>{title}</Label>
      </LabelContainer>
    </Container>
  );
}

const Container = styled.View`
  width: ${width}px;
`;

const LabelContainer = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 60px;
  font-family: 'SFProText-Bold';
  color: white;
  text-align: center;
`;
