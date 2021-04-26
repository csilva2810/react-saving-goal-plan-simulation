import { getLongMonthName, calculateDiffInMonths } from '.';

describe('getLongMonth', () => {
  it('should return date month name', () => {
    expect(getLongMonthName(new Date('2021-01-01 10:00:00Z'))).toBe('January');
    expect(getLongMonthName(new Date('2021-02-01 10:00:00Z'))).toBe('February');
    expect(getLongMonthName(new Date('2021-03-01 10:00:00Z'))).toBe('March');
    expect(getLongMonthName(new Date('2021-04-01 10:00:00Z'))).toBe('April');
    expect(getLongMonthName(new Date('2021-05-01 10:00:00Z'))).toBe('May');
    expect(getLongMonthName(new Date('2021-06-01 10:00:00Z'))).toBe('June');
    expect(getLongMonthName(new Date('2021-07-01 10:00:00Z'))).toBe('July');
    expect(getLongMonthName(new Date('2021-08-01 10:00:00Z'))).toBe('August');
    expect(getLongMonthName(new Date('2021-09-01 10:00:00Z'))).toBe(
      'September'
    );
    expect(getLongMonthName(new Date('2021-10-01 10:00:00Z'))).toBe('October');
    expect(getLongMonthName(new Date('2021-11-01 10:00:00Z'))).toBe('November');
    expect(getLongMonthName(new Date('2021-12-01 10:00:00Z'))).toBe('December');
  });
});

describe('calculateDiffInMonths', () => {
  it('should return the correct number of months between two dates', () => {
    expect(
      calculateDiffInMonths(
        new Date('2021-05-01 10:00:00Z'),
        new Date('2021-04-01 10:00:00Z')
      )
    ).toBe(1);

    expect(
      calculateDiffInMonths(
        new Date('2021-06-01 10:00:00Z'),
        new Date('2021-04-01 10:00:00Z')
      )
    ).toBe(2);

    expect(
      calculateDiffInMonths(
        new Date('2022-04-01 10:00:00Z'),
        new Date('2021-04-01 10:00:00Z')
      )
    ).toBe(12);

    expect(
      calculateDiffInMonths(
        new Date('2023-04-01 10:00:00Z'),
        new Date('2021-04-01 10:00:00Z')
      )
    ).toBe(24);
  });
});
