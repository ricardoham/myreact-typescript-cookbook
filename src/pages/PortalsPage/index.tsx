import React, { useState } from 'react';
import Modal from '../../components/Modal';

const PortalsPage = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <article>
        <header>Here a Example of React Portals:</header>
        <h4>Modal</h4>
        <Modal showModal={showModal} onCloseModal={(): void => setShowModal(false)} />
        <button type="button" onClick={(): void => setShowModal(true)}>
          Show Modal
        </button>
      </article>
    </section>
  );
};

export default PortalsPage;
