import styled from 'styled-components';

interface Props {
    showSection: boolean;
}

export const StyledSection = styled.div<Props>`
    display: ${(props) => (props.showSection ? 'block' : 'none')};
`;
