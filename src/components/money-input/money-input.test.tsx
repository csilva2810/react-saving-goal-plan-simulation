import * as React from 'react';
import { renderWithProviders } from '../../test-utils';

import MoneyInput from './money-input';

describe('<MoneyInput />', () => {
  it('should render an input', () => {
    const screen = renderWithProviders(
      <MoneyInput name="money" value="" onChange={() => {}} />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should allow only numbers', () => {
    let screen = renderWithProviders(
      <MoneyInput name="money" value="abc" onChange={() => {}} />
    );

    expect(screen.getByRole('textbox')).toHaveValue('0');

    screen.unmount();
    screen = renderWithProviders(
      <MoneyInput name="money" value="123" onChange={() => {}} />
    );

    expect(screen.getByRole('textbox')).toHaveValue('123');
  });
});
