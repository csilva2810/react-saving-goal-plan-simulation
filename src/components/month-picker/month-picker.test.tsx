import * as React from 'react';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '../../test-utils';

import MonthPicker from './month-picker';

describe('MonthPicker', () => {
  it('should render correctly', () => {
    const screen = renderWithProviders(
      <MonthPicker
        label="Pick a month"
        date={new Date('2021-04-01 10:00:00Z')}
        onChange={() => {}}
      />
    );

    expect(screen.getByText('Pick a month')).toBeInTheDocument();
    expect(screen.getByText('April')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /previous month/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /next month/i })
    ).toBeInTheDocument();
  });

  it('should not render the label when it is not provided', () => {
    const screen = renderWithProviders(
      <MonthPicker
        date={new Date('2021-04-01 10:00:00Z')}
        onChange={() => {}}
      />
    );

    expect(screen.queryByText('Pick a month')).not.toBeInTheDocument();
  });

  it('should only allow future dates', async () => {
    const onChangeDate = jest.fn();
    const screen = renderWithProviders(
      <MonthPicker
        label="Pick a month"
        date={new Date('2021-04-01 10:00:00Z')}
        onChange={onChangeDate}
      />
    );

    userEvent.click(screen.getByRole('button', { name: /previous month/i }));
    expect(onChangeDate).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('button', { name: /next month/i }));
    expect(onChangeDate).toHaveBeenCalledWith(new Date('2021-05-01 10:00:00Z'));
  });

  it('should let the user change months using keyboard arrows', () => {
    const listeners: Record<string, any> = {};
    jest
      .spyOn(global, 'addEventListener')
      .mockImplementation((event, callback) => {
        listeners[event] = callback;
      });

    const onChangeDate = jest.fn();
    renderWithProviders(
      <MonthPicker
        label="Pick a month"
        date={new Date('2021-04-01 10:00:00Z')}
        onChange={onChangeDate}
      />
    );

    listeners.keydown({ defaultPrevented: false, key: 'Right' });
    expect(onChangeDate).toHaveBeenCalledWith(new Date('2021-05-01 10:00:00Z'));
  });
});
