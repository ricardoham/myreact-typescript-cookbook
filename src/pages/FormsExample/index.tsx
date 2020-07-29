import React from 'react';
import { Field, Formik, FormikValues } from 'formik';
import { UserModel } from '../../models/user';
import { FormsExampleContent, Form } from './styles';
import Button from '../../components/Button';
interface Props {
  users?: UserModel;
}

const FormsExample = ({ users }: Props) => {
  const initialValues = {
    name: users?.name || '',
    surName: users?.surName || '',
    age: users?.age || 0,
  };

  const handleSubmit = () => {
    console.log('Form Submit');
  };

  return (
    <FormsExampleContent>
      <h3>Forms Example</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }: FormikValues) => (
          <Form>
            <Field name="name" placeholder="First Name" />
            <Field name="surName" placeholder="Sur Name" />
            <Field name="age" placeholder="Age" />
            <Button color="primary" fill="filled" type="submit" onClick={handleSubmit} text="Submit" />
          </Form>
        )}
      </Formik>
    </FormsExampleContent>
  );
};

export default FormsExample;
