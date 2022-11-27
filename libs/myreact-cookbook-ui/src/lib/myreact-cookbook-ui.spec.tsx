import { render } from '@testing-library/react';

import MyreactCookbookUi from './myreact-cookbook-ui';

describe('MyreactCookbookUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyreactCookbookUi />);
    expect(baseElement).toBeTruthy();
  });
});
