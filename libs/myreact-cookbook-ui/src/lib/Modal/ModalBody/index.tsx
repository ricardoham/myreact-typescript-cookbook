import * as S from './styles';

interface Props {
  children: JSX.Element;
}

export const ModalBody = ({ children }: Props): JSX.Element => {
  return <S.ModalBodyContainer>{children}</S.ModalBodyContainer>;
};
