import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  codeString: string;
}

export const CodeBlock = ({ codeString }: Props): JSX.Element => (
  <SyntaxHighlighter
    language="jsx"
    style={dracula}
    customStyle={{ borderRadius: '8px' }}
  >
    {codeString}
  </SyntaxHighlighter>
);
