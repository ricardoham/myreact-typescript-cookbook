import React from 'react';
import FormsExample from './Form';
import UsersListContainer from 'containers/UsersList';

const FormsPage = () => {
  return (
    <section>
      <UsersListContainer />
      <FormsExample />
    </section>
  );
};

export default FormsPage;
