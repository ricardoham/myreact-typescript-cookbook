import * as S from './styles';

interface Props {
  header: string;
  text?: string;
  image?: string;
}

const Banner: React.FC<Props> = ({ header, text, image }: Props) => {
  return (
    <S.BannerContainer>
      <span>{text}</span>
      <h1>{header}</h1>
    </S.BannerContainer>
  );
};

export default Banner;
