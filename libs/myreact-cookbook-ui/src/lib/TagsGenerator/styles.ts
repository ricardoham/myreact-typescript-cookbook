import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';

export const RemoveIcon = styled(IoIosClose)`
  cursor: pointer;
  font-size: 1.4rem;
`;

export const StyledTag = styled.div`
  padding: 10px;
`;

export const StyledTagInput = styled.input`
  height: 30px;
  width: 200px;
`;

export const StyledTagHeader = styled.h3``;

export const StyledTagItem = styled.li`
  display: flex;
  background-color: #ff7979;
  padding: 5px;
  width: 4rem;
  height: 1.5rem;
  border-radius: 8px;
  margin: 5px 0;
`;

export const StyledTagItemText = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
