import React from 'react';
import { useField } from 'formik';
import { ErrorMessage } from './styles';
import { Label } from '../Label';

interface Props {
  name: string;
  label?: string;
  id?: string;
  children: JSX.Element;
}

export const CustomFormikField = ({
  id,
  name,
  label,
  children,
  ...props
}: Props): JSX.Element => {
  const [field, meta] = useField({ ...props, name });

  return (
    <>
      {label && <Label id={id} name={name} label={label} />}
      {children &&
        React.cloneElement(children, {
          ...children.props,
          ...field,
        })}
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </>
  );
};
