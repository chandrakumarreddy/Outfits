import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {interpolateColor, useScrollHandler} from 'react-native-redash';

import Slide from './Slide';
import SubSlide from './SubSlide';
import Animated, {multiply} from 'react-native-reanimated';

import {width, height, BORDER_RADIUS} from '../../../utils/constants';

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find our Outfits',
    description:
      'Consfused about your Outfits? Don"t worry! Find the best outfit here',
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description:
      'hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funcky',
    subtitle: 'Look Good, Feel Good',
    description:
      'Discovr the latest trends in Fashion ans explore your personality',
    color: '#FFDDDD',
  },
];

export default function Onboarding() {
  const scrollRef = React.useRef<Animated.ScrollView>(null);
  const {scrollHandler, x} = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, index) => width * index),
    outputRange: slides.map((slide) => slide.color),
  });
  const moveToNextSlide = (index: number) => () => {
    if (scrollRef.current) {
      scrollRef.current
        .getNode()
        .scrollTo({x: width * (index + 1), animated: true});
    }
  };
  return (
    <Container>
      <Slider style={{backgroundColor}}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate={'fast'}
          snapToInterval={width}
          {...scrollHandler}>
          {slides.map((slide, index) => (
            <Slide key={index} {...slide} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Slider>
      <Footer>
        <FooterCover style={{backgroundColor}} />
        <FooterContent
          style={{
            width: width * slides.length,
            transform: [{translateX: multiply(x, -1)}],
          }}>
          {slides.map((slide, index) => (
            <SubSlide
              {...slide}
              onPress={moveToNextSlide(index)}
              key={index}
              last={index === slides.length - 1}
            />
          ))}
        </FooterContent>
      </Footer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Slider = styled(Animated.View)`
  flex: 1;
  height: ${0.61 * height}px;
  border-bottom-right-radius: ${BORDER_RADIUS};
`;

const Footer = styled.View`
  height: ${0.39 * height}px;
`;

const FooterCover = styled(Animated.View)`
  ${{...StyleSheet.absoluteFillObject}};
`;
const FooterContent = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  border-top-left-radius: ${BORDER_RADIUS};
  background-color: white;
`;
