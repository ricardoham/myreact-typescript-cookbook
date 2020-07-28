import React from 'react';
import { Field, Form, Formik } from 'formik';
import { UserModel } from '../../models/user';

interface Props {
  users: UserModel;
}

const FormsExample = ({ users }: Props) => {
  const initialValues = {
    name: users.name || '',
    surName: users.surName || '',
    age: users.age || 0,
  };
  return;
};
