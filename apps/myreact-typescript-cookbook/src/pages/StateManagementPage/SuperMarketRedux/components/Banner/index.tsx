import React from 'react';
import * as S from './styles';

interface Props {
  header: string;
  text?: string;
  image?: string;
}

const Banner = ({ header, text, image }: Props) => {
  return (
    <S.BannerContainer>
      <span>{text}</span>
      <h1>{header}</h1>
    </S.BannerContainer>
  );
};

export default Banner;
