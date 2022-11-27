import Button from 'libs/myreact-cookbook-ui/src/lib/Button';
import CodeBlock from 'libs/myreact-cookbook-ui/src/lib/CodeBlock';
import ImageSlider from 'libs/myreact-cookbook-ui/src/lib/ImageSlider';
import Modal from 'libs/myreact-cookbook-ui/src/lib/Modal';
import ModalBody from 'libs/myreact-cookbook-ui/src/lib/Modal/ModalBody';
import ModalHeader from 'libs/myreact-cookbook-ui/src/lib/Modal/ModalHeader';
import { useState } from 'react';
// import Button from 'components/Button';
// import ImageSlider from 'components/ImageSlider';
// import ModalBody from 'components/Modal/ModalBody';
// import ModalFooter from 'components/Modal/ModalFooter';
// import ModalHeader from 'components/Modal/ModalHeader';
// import Modal from 'components/Modal';
import * as S from './styles';
// import CodeBlock from 'components/CodeBlock';

const Portals = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const imgs = [
    '/assets/images/snippets/dom-no-portals.png',
    '/assets/images/snippets/dom-with-portals.png',
  ];
  const codeString = `
    import React from 'react';
    import { createPortal } from 'react-dom';

    const Portal = (): React.ReactPortal => {
      return createPortal(
        <div>
          <h1>Portal Code Example</h1>
          <p>This is a code example of React Portals</p>
        </div>
      ),
      document.body // Where the portal will inject
    }
  `;

  return (
    <section>
      <article>
        <h2>React Portals</h2>
        <p>
          Portals provide first-class way to render children into a DOM node
          that exists outside the DOM hierarchy of the parent component.
        </p>
        <CodeBlock codeString={codeString} />
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

export default Portals;
