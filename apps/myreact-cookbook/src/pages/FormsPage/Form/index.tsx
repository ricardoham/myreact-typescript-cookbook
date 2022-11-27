import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Button,
  CustomFormikField as Field,
  Input,
} from '@myreact-cookbook/myreact-cookbook-ui';
import { UserModel } from '../../../models/user';
import * as S from './styles';

interface Props {
  users?: UserModel;
}

const FormsExample: React.FC<Props> = ({ users }: Props) => {
  const initialValues = {
    name: users?.name || '',
    surName: users?.surName || '',
    age: users?.age || 0,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    surName: yup.string().required('Surname is required'),
    age: yup.number().required('Age is required'),
  });

  const handleSubmit = (): void => {
    console.log('Form Submit');
  };

  const handleClearForm = (): void => {
    console.log('Clear form');
  };

  return (
    <S.FormsExampleContent>
      <h3>Forms Example</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnMount={true}
      >
        {(): JSX.Element => (
          <S.Form>
            <Field name="name" label="First Name">
              <Input />
            </Field>
            <Field name="surName" label="Sur Name">
              <Input />
            </Field>
            <Field name="age" label="Age">
              <Input />
            </Field>
            <S.ButtonContainer>
              <Button type="submit" onClick={handleSubmit} text="Submit" />
              <Button onClick={handleClearForm} color="danger" text="Clear" />
            </S.ButtonContainer>
          </S.Form>
        )}
      </Formik>
    </S.FormsExampleContent>
  );
};

export default FormsExample;
