import React from 'react';
import { useField } from 'formik';

interface Props {
  name: string;
  label?: string;
  id?: string;
  children: JSX.Element;
}

const CustomFormikField = ({ id, name, label, children, ...props }: Props) => {
  const [field, meta] = useField({ ...props, name });

  return <div>works</div>;
};

export default CustomFormikField;
