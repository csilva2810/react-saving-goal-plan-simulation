import differenceInMonths from 'date-fns/differenceInMonths';

export const getLongMonthName = (date: Date) =>
  date.toLocaleString('default', { month: 'long' });

export const calculateDiffInMonths = (left: Date, right: Date) =>
  differenceInMonths(left, right);
