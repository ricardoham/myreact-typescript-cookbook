import React from 'react';
import { Field, Form, Formik } from 'formik';
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
  return (
    <FormsExampleContent>
      <h3>Forms Example</h3>
      <Formik initialValues={initialValues}>
        {({ values }) => (
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
