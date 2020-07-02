import React from 'react';
import Accordion from '../../components/Accordion';

const HooksPage = () => {
  return (
    <section>
      <article>
        <header>
          <h2>React Hooks</h2>
        </header>
        <p>Introduced in version 16.8 of React lib,
             with purpose to bring functionalities that class component have to Functional Components.
             Bellow we see some examples:
        </p>
        <Accordion title="State Hook">
          <span> TEST </span>
        </Accordion>
      </article>
    </section>
  )
}

export default HooksPage;
