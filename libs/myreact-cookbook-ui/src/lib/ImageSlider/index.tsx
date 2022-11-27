// import IconButton from 'components/IconButton';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import IconButton from '../IconButton';
import * as S from './styles';

export interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props): JSX.Element => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <S.ImageSliderContainer>
      <S.Image src={images[currentImg]} alt="" />
      <S.ImageControlContainer>
        <IconButton
          icon={<FaChevronLeft />}
          disabled={currentImg === 0}
          onClick={() => setCurrentImg(currentImg - 1)}
        />
        <S.ImageSliderPageNumber>{currentImg + 1}</S.ImageSliderPageNumber>
        <IconButton
          icon={<FaChevronRight />}
          onClick={() => setCurrentImg(currentImg + 1)}
          disabled={currentImg > images.length - 2}
        />
      </S.ImageControlContainer>
    </S.ImageSliderContainer>
  );
};

export default ImageSlider;
