import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const FormsExampleContent = styled.section`
  display: flex;
  margin: 4rem;
  flex-direction: column;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: flex-start;
`;
