import React from 'react';
import styled from 'styled-components/native';
import Button from '../../../Components/Button';

interface subSlideProps {
  subtitle: string;
  description: string;
  last: boolean;
  onPress: () => void;
}

export default function SubSlide({
  subtitle,
  description,
  last,
  onPress,
}: subSlideProps) {
  return (
    <Container>
      <SubTitle>{subtitle}</SubTitle>
      <Description>{description}</Description>
      <Button
        onPress={onPress}
        label={last ? "Let's Get Started" : 'Next'}
        variant={last ? 'primary' : 'default'}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 44px;
`;

const SubTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 12px;
  line-height: 30px;
  color: #0c0d34;
  font-family: 'SFProText-Bold';
`;

const Description = styled.Text`
  font-family: 'SFProText-Regular';
  text-align: center;
  line-height: 24px;
  margin-bottom: 40px;
  font-size: 16px;
  color: #0c0d34;
`;
