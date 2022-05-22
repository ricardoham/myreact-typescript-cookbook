import React, { useState } from 'react';
import Button from 'components/Button';
import ImageSlider from 'components/ImageSlider';
import ModalBody from 'components/Modal/ModalBody';
import ModalFooter from 'components/Modal/ModalFooter';
import ModalHeader from 'components/Modal/ModalHeader';
import Modal from '../../components/Modal';
import * as S from './styles';

const PortalsPage = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const imgs = [
    '/images/snippets/dom-no-portals.png',
    '/images/snippets/dom-with-portals.png',
  ];
  return (
    <section>
      <article>
        <h4>React Portals</h4>
        <p>
          Portals provide first-class way to render children into a DOM node
          that exists outside the DOM hierarchy of the parent component.
        </p>
        <p>Bellow a example with a Modal Component</p>
      </article>
      <Modal
        showModal={showModal}
        onCloseModal={(): void => setShowModal(false)}
      >
        <ModalHeader
          headerTitle="React Portals"
          onCloseModal={(): void => setShowModal(false)}
        />
        <ModalBody>
          <S.PortalsPageModalContainer>
            <p>
              {' '}
              In the example bellow we can see the injected element when portal
              is active as image number 2 showed.
            </p>
            <ImageSlider images={imgs} />
          </S.PortalsPageModalContainer>
        </ModalBody>
      </Modal>
      <Button onClick={(): void => setShowModal(true)} text="Click Here!" />
    </section>
  );
};

export default PortalsPage;
