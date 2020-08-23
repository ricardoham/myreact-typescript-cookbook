import React from 'react';
import { Formik, FormikValues } from 'formik';
import * as yup from 'yup';
import { UserModel } from 'models/user';
import { FormsExampleContent, Form } from './styles';
import Button from 'components/Button';
import Field from 'components/Field';
import Input from 'components/Input';
interface Props {
  users?: UserModel;
}

const FormsExample = ({ users }: Props) => {
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

  const handleSubmit = () => {
    console.log('Form Submit');
  };

  return (
    <FormsExampleContent>
      <h3>Forms Example</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        isInitialValid={(formik: any) => validationSchema.isValidSync(formik.initialValues)}
      >
        {({ values, isValid }: FormikValues) => (
          <Form>
            <Field name="name" label="First Name">
              <Input />
            </Field>
            <Field name="surName" label="Sur Name">
              <Input />
            </Field>
            <Field name="age" label="Age">
              <Input />
            </Field>
            <Button type="submit" onClick={handleSubmit} text="Submit" />
          </Form>
        )}
      </Formik>
    </FormsExampleContent>
  );
};

export default FormsExample;
