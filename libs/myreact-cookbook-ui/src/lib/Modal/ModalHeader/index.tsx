import { FaTimes } from 'react-icons/fa';
import { IconButton } from '../../IconButton';
import * as S from './styles';

interface Props {
  headerTitle: string;
  onCloseModal?: () => void;
}

const ModalHeader = ({ headerTitle, onCloseModal }: Props): JSX.Element => {
  return (
    <S.ModalHeaderContainer>
      <S.ModalHeaderTitle>{headerTitle}</S.ModalHeaderTitle>
      <IconButton icon={<FaTimes />} onClick={onCloseModal || undefined} />
    </S.ModalHeaderContainer>
  );
};

export default ModalHeader;
