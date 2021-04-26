import { formatMoney, calculateMonthlyAmount } from '.';

describe('formatMoney', () => {
  it('should format numbers as money', () => {
    expect(formatMoney(25000)).toBe('$ 25,000');
    expect(formatMoney(100)).toBe('$ 100');
    expect(formatMoney(2000)).toBe('$ 2,000');
    expect(formatMoney(2050)).toBe('$ 2,050');
  });

  it('should format with decimals', () => {
    expect(formatMoney(2500012, { precision: 2 })).toBe('$ 25,000.12');
  });

  it('should be able to remove currency symbol', () => {
    expect(formatMoney(1000, { unit: '' })).toBe('1,000');
  });
});

describe('calculateMonthlyAmount', () => {
  it('calculate needed montly amount to reach the total amount', () => {
    expect(calculateMonthlyAmount(25000, 48)).toBe(521);
    expect(calculateMonthlyAmount(1000, 10)).toBe(100);
    expect(calculateMonthlyAmount(1000, 1)).toBe(1000);
    expect(calculateMonthlyAmount(1000, 2)).toBe(500);
    expect(calculateMonthlyAmount(1050, 2)).toBe(525);
  });
});
