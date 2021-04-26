import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { within } from '@testing-library/react';
import { renderWithProviders } from '../../test-utils';

import NewSavingPlan from './new-saving-plan';

beforeAll(() => {
  jest.useFakeTimers('modern').setSystemTime(new Date('2020-04-01 10:00:00Z'));
});

afterAll(() => {
  jest.useRealTimers();
});

describe('<NewSavingPlan />', () => {
  let screen: ReturnType<typeof renderWithProviders>;
  let previousMonthButton: HTMLElement;
  let nextMonthButton: HTMLElement;
  let form: HTMLElement;
  let totalAmountInput: HTMLElement;

  beforeEach(() => {
    screen = renderWithProviders(<NewSavingPlan />);
    previousMonthButton = screen.getByRole('button', {
      name: /previous month/i,
    });
    nextMonthButton = screen.getByRole('button', { name: /next month/i });
    form = screen.getByRole('form', { name: 'saving plan form' });
    totalAmountInput = screen.getByRole('textbox', { name: /total amount/i });
  });

  it('should not allow non digit characters on the total amount input', () => {
    userEvent.type(totalAmountInput, 'aaaa');
    expect(totalAmountInput).toHaveValue('0');

    userEvent.type(totalAmountInput, '1000');
    expect(totalAmountInput).toHaveValue('1,000');
  });

  it('should not let the user select a previous month', () => {
    expect(within(form).getByText('April')).toBeInTheDocument();

    userEvent.click(previousMonthButton);
    userEvent.click(previousMonthButton);
    userEvent.click(previousMonthButton);

    expect(within(form).getByText('April')).toBeInTheDocument();

    userEvent.click(nextMonthButton);

    expect(within(form).getByText('May')).toBeInTheDocument();
  });

  it('should calculate the monthly amount and display at the details card', () => {
    const expected = {
      totalAmount: '$ 1,000',
      deposits: 10,
      monthlyAmount: '$ 100',
      month: 'February',
      year: '2021',
    };
    userEvent.type(totalAmountInput, '1000');
    expect(totalAmountInput).toHaveValue('1,000');

    for (let i = 0; i < expected.deposits; i++) {
      userEvent.click(nextMonthButton);
    }

    const detailsCard = screen.getByRole('region', { name: /details card/i });
    expect(detailsCard).toHaveTextContent(expected.monthlyAmount);
    expect(detailsCard).toHaveTextContent(
      `You’re planning ${expected.deposits} monthly deposits to reach your ${expected.totalAmount} goal by ${expected.month} ${expected.year}.`
    );
  });
});
