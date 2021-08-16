import * as React from 'react';

import { render, screen } from 'src/test/utils';

import { Button } from './Button';

describe('<Button />', () => {
  it('should render with children', () => {
    render(<Button>Hello World</Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Hello World');
  });
});
