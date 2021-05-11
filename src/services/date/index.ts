import differenceInMonths from 'date-fns/differenceInMonths';
import addMonth from 'date-fns/addMonths'

export const getLongMonthName = (date: Date) =>
  date.toLocaleString('default', { month: 'long' });

export const calculateDiffInMonths = (left: Date, right: Date) =>
  differenceInMonths(left, right);

export const getNextMonth = () => addMonth(new Date(), 1)
