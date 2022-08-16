import CodeBlock from 'components/CodeBlock';
import React from 'react';

const StateHookTyping = (): JSX.Element => {
  const codeString = `
  import React, { useState } from 'react';

  interface Products {
    id: string;
    name: string;
    createdAt: Date;
  }

  const MyComponent = <T extends unknown>(): JSX.Element => {

    // Typing by initial state
    const [user, setUser] = useState(''); // const user: string
    const [age, setAge] = useState(0); // const age: number
    const [userAccount, setUserAccount] = useState({ name: '', age: 0 }); // const userAccount: { name: string, age: number }

    // Typing by interface
    const [products, setProducts] = useState<Products>();

    // Typing by pipe | members
    const [products, setProducts] = useState<Products | undefined>();

    // Typing by generic type
    const [products, setProducts] = useState<T>();

  };`;

  return (
    <article>
      <p>Typing a useState is very straightforward</p>
      <p>You can type by initial state like a type inference</p>
      <p>
        Or using the diamond syntax before <code>useState</code>
      </p>
      <CodeBlock codeString={codeString} />
    </article>
  );
};

export default StateHookTyping;
