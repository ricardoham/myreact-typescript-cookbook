import * as S from './styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const ModalFooter = ({ children }: Props): JSX.Element => {
  return <S.ModalFooterContainer>{children}</S.ModalFooterContainer>;
};
