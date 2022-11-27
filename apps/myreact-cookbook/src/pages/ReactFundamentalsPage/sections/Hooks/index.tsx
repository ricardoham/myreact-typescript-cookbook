import Accordion from 'libs/myreact-cookbook-ui/src/lib/Accordion';
import StateHookNinjaTurtles from './StateHook';

const Hooks: React.FC = () => {
  return (
    <section>
      <article>
        <header>
          <h2>React Hooks</h2>
        </header>
        <p>
          Introduced in version 16.8 of React lib, with purpose to bring
          functionalities that class component have to Functional Components.
          Bellow we see some examples:
        </p>
        <Accordion title="State Hook">
          <StateHookNinjaTurtles />
        </Accordion>
      </article>
    </section>
  );
};

export default Hooks;
