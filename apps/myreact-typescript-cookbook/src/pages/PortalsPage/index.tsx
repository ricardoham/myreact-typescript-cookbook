import Button from 'components/Button';
import ModalBody from 'components/Modal/ModalBody';
import ModalFooter from 'components/Modal/ModalFooter';
import ModalHeader from 'components/Modal/ModalHeader';
import React, { useState } from 'react';
import Modal from '../../components/Modal';

const PortalsPage = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section>
      <article>
        <header>Here a Example of React Portals:</header>
        <h4>Modal</h4>
        <Modal showModal={showModal} onCloseModal={(): void => setShowModal(false)}>
          <ModalHeader headerTitle='test' onCloseModal={(): void => setShowModal(false)}/>
          <ModalBody>
            <span>test</span>
          </ModalBody>
          <ModalFooter />
        </Modal>
        <Button onClick={(): void => setShowModal(true)} text="Click Here!" />
      </article>
    </section>
  );
};

export default PortalsPage;
