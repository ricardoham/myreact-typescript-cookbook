import React from 'react';
import { Field, Form, Formik, FormikValues } from 'formik';
import { UserModel } from '../../models/user';
import { FormsExampleContent } from './styles';
interface Props {
  users: UserModel;
}

const FormsExample = ({ users }: Props) => {
  const initialValues = {
    name: users.name || '',
    surName: users.surName || '',
    age: users.age || 0,
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
            <Field>
              <input />
            </Field>
          </Form>
        )}
      </Formik>
    </FormsExampleContent>
  );
};

export default FormsExample;
