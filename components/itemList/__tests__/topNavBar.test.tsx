import React from 'react';
import { render, screen } from '@testing-library/react';

import TopNavBar from '../topNavBar';

describe('TopNavBar', () => {
  it('should rendering without crashing', () => {
    render(<TopNavBar />);

    expect(
      screen.getByRole('button', { name: 'open drawer' })
    ).toBeInTheDocument();
  });
});
