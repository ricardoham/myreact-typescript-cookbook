import * as S from './styles';

export interface Props {
  children?: JSX.Element | JSX.Element[];
}

const ModalFooter = ({ children }: Props): JSX.Element => {
  return <S.ModalFooterContainer>{children}</S.ModalFooterContainer>;
};

export default ModalFooter;
