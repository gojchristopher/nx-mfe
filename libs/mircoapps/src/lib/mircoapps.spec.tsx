import { render } from '@testing-library/react';

import Mircoapps from './mircoapps';

describe('Mircoapps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mircoapps />);
    expect(baseElement).toBeTruthy();
  });
});
